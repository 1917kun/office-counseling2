// 引用驗證工具
import validator from 'validator'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// 引用重複驗證錯誤訊息插件,unique只能接true但是使用這套件可以自訂錯誤訊息
import beautifyUnique from 'mongoose-beautiful-unique-validation'
// 引用將 _id 欄位顯示為 id 的插件
import idPlugin from 'mongoose-id'

dotenv.config()
const Schema = mongoose.Schema

// 連接資料庫
mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })

// 引用插件
mongoose.plugin(beautifyUnique)
mongoose.plugin(idPlugin)

// 編寫資料表綱要
const caseSchema = new Schema(
  {
    // 欄位名稱
    name: {
      // 資料類型是文字
      type: String,
      // 最小長度，自訂錯誤訊息
      minlength: [2, '名字最多 2 個字'],
      // 最大長度，自訂錯誤訊息
      // maxlength: [20, '名字最多 20 個字'],
      // 必填欄位，自訂錯誤訊息
      required: [true, '名字必填']
      // 避免重複，只能設定 true，無法自訂錯誤訊息，除非使用插件
      // unique: '名字重複'
    },
    // password: {
    //   type: String,
    //   required: [true, '密碼必填']
    // },
    age: {
      type: Number,
      // 最小值，自訂錯誤訊息
      // min: [18, '必須大於 18 歲'],
      // 最大值，自訂錯誤訊息
      // max: [99, '請輸入有效年齡'],
      required: [true, '年齡必填']
    },
    number: {
      type: String,
      min: [6, '必須大於 6碼'],
      required: [true, '電話必填'],
      unique: '號碼重複'
    },
    email: {
      type: String,
      required: [true, '信箱必填'],
      unique: '信箱已使用',
      // 自訂驗證規則
      validate: {
        // 驗證 function
        validator (value) {
          return validator.isEmail(value)
        },
        // 錯誤訊息
        message: '信箱格式錯誤'
      }
    },
    worry: {
      type: String,
      minlength: [10, '最少 10 個字'],
      // maxlength: [300, '最多 300 個字'],
      required: [true, '請先告訴我們喔']
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  {
    // 不要紀錄資料修改次數
    versionKey: false
  }
)

const fileSchema = new Schema({
  description: {
    type: String,
    maxlength: [200, '說明必須兩百個字以下']
  },
  name: {
    type: String,
    required: [true, '沒有檔案名稱']
  }
}, {
  versionKey: false
})

// 建立 Model
// mongoose.model('資料表名稱', Schema)
// 資料表名稱必須為複數，結尾加 s
const cases = mongoose.model('cases', caseSchema)
const files = mongoose.model('files', fileSchema)
const connection = mongoose.connection

// 匯出變數
export default {
  cases,
  files,
  connection
}
