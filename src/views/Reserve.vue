<template lang="pug">
  #reserve
    b-container.h-100.d-flex.justify-content-center.align-items-center
      b-row
        b-col.teamtop.d-flex.flex-column
          span.text-center(:style="{color:'#e9a040'}") RESERVATION
          span.text-center(:style="{color:'#4b7fc9',fontweight:'bolder'}") 初診線上預約
    //- explain--------------------------------------------------------------------------------
    b-container.explain
      b-row.justify-content-center
        b-col(cols="12" md="8" lg="6")
          strong 傾心初診線上預約，請填以下表格
          div
            span 健保初診
            span 費用為500元，20-30分鐘，自費心理諮商初診 1000元。
          div
            span 醫師將初步了解您的狀況。
            span (費用說明)
          p *請注意未滿20歲，建議由家長陪同看診，或是持家長同意書。
    //----form---------------------------------------------------------------------------------
    b-container
      b-row.justify-content-center
        b-col(cols="12" md="8" lg="6").p-0
          b-form(@submit='onSubmit' @reset='onReset' v-if='show')
            //-名字
            b-form-group#input-group-1(label='名字:' label-for='input-1' :invalid-feedback='nameinvalidFeedback' :valid-feedback='namevalidFeedback' :state="namestate")
              b-form-input#input-1(v-model='form.name' required placeholder='' :state="namestate")
            //-年齡
            b-form-group#input-group-2(label='年齡:' label-for='input-2' :invalid-feedback='ageinvalidFeedback' :valid-feedback='agevalidFeedback' :state="agestate")
              b-form-input#input-2(v-model='form.age' type="number" required placeholder='' :state="agestate")
            //-電話
            b-form-group#input-group-3(label='聯絡電話:'  label-for='input-3' :invalid-feedback='phoneinvalidFeedback' :valid-feedback='phonevalidFeedback' :state="phonestate")
              b-form-input#input-3(v-model='form.number' type='number' required placeholder='' :state="phonestate")
            //-Email
            b-form-group#input-group-4(label='Email:' label-for='input-4' description='' :invalid-feedback='emailinvalidFeedback' :valid-feedback='emailvalidFeedback' :state="emailstate")
              b-form-input#input-4(v-model='form.email' type='email' required placeholder='' :state="emailstate")
            //-煩惱的事
            b-form-group#input-group-5(label="你/妳煩惱的事:" label-for="textarea" description="" :invalid-feedback='worryinvalidFeedback' :valid-feedback='worryvalidFeedback' :state="worrystate")
              b-form-textarea#textarea(v-model="form.worry" required placeholder="寫下你/妳煩惱的事" size="lg" :state="worrystate")
            //-方式選擇
            label.formmethod *請選擇想要的服務類型:
            b-form-radio-group(v-model='form.selected' :options="options" name="radio-options-slots")
            //-日期選擇
            b-form-group#input-group-5
              label.formmethod *請選擇日期:
              b-form-datepicker#date(v-model="form.date" required today-button reset-button close-button dropright )
              div.d-flex.flex-column
                label.formmethod *請選擇時段:
                span.remarks 如非線上諮商請在預約時間前五分鐘到達，感謝您的配合
              b-form-timepicker#time(v-model="form.time" required now-button reset-button locale="zh"  @context="onContext" dropright)
            div.sumit.d-flex.justify-content-center
              b-button(type='submit' variant='primary' :disabled="disabled") 預約
              b-button(type='reset' variant='danger') 取消
    //-門診時間 ----------------------------------------------------------
    b-container.time
      b-row.justify-content-center
        b-col(cols="12" md="8" lg="6")
          strong 傾心門診時間
          div.mb-3
            span 請注意傾心的門診時間。
          div
            img(src="/img/time.jpg")
      //- footer-----------------------------------------------------------
    hr
    b-container.footer
      b-row.footerrow
        b-col.footercol1(cols="12" sm="6")
          .embed-responsive.embed-responsive-21by9.map(v-for="(footer,index) in footers" :key="index")
            iframe(:src='footer.imgsrc' width='' frameborder='0' allowfullscreen)
        b-col.footercol2(cols="12" sm="6" v-for="(footer,index) in footers" :key="index")
          div
            p
              img(:src='footer.logoimg' width="84" height="57")
              span.logotext(:style="{color:'#0F4C81',fontsize:'30px'}") 傾心診所
          .footertext
            p
              span 診所地址
              span 新北市泰山區貴子里致遠新村55之1號
            p
              span 聯絡專線
              span 02-23651675
            p
              span 電子信箱
              span anleader911@gmai.com
            p
              font-awesome-icon(:icon="['fab', 'facebook']")
              font-awesome-icon(:icon="['fab', 'line']")
              font-awesome-icon(:icon="['fab', 'instagram']")
            p(style="color:#a9a9a9;") 傾心電子報
          .footersubscription
            b-input(placeholder="電子信箱")
            b-button(squared ) 訂閱
          span.lab Copyright © 2020 傾心診所
    b-container
      .row.justify-content-center
        span.span1 Copyright © 2020 傾心診所
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        age: '',
        number: '',
        email: '',
        worry: '',
        selected: '醫生看診(藥物協助)',
        date: '',
        time: ''
      },
      show: true,
      options: [
        { text: '醫生看診(藥物協助)', value: '醫生看診(藥物協助)' },
        { text: '心理諮商(專業會談)', value: '心理諮商(專業會談)' },
        { text: '線上心理諮商', value: '線上心理諮商' }
      ],
      footers: [
        {
          logoimg: '/img/logo.svg',
          imgsrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw'
        }
      ]
    }
  },
  computed: {
    disabled () {
      return (this.form.name.length === 0 || this.form.age.length === 0 || this.form.email.length === 0 || this.form.time.number === 0 || this.form.email.length === 0 || this.form.worry.length === 0 || this.form.date.length === 0 || this.form.time.length === 0)
    },
    // name-----------------------------------
    namestate () {
      return (this.form.name.length === 0) ? null : isNaN(this.form.name) === true
    },
    nameinvalidFeedback () {
      return (!isNaN(this.form.name)) ? '請輸入文字' : ''
    },
    namevalidFeedback () {
      return this.state === true ? '感謝您的填寫' : ''
    },
    // age------------------------------------
    agestate () {
      if (this.form.age.length === 0) {
        return null
      } else if (this.form.age > 0 && this.form.age < 99) {
        return true
      } else {
        return false
      }
    },
    ageinvalidFeedback () {
      return (this.form.age > 99 || this.form.age < 0) ? '請輸入正確年齡' : ''
    },
    agevalidFeedback () {
      return this.agestate === true ? '感謝您的填寫' : ''
    },
    // phone-----------------------------------------------
    phonestate () {
      if (this.form.number.length === 0) {
        return null
      } else if (this.form.number.length > 6) {
        return true
      } else {
        return false
      }
    },
    phoneinvalidFeedback () {
      return (this.phonestate === false || isNaN(this.form.number)) ? '請輸入正確電話號碼' : ''
    },
    phonevalidFeedback () {
      return this.phonestate === true ? '感謝您的填寫' : ''
    },
    // email------------------------------------------------
    emailstate () {
      if (this.form.email.length === 0) {
        return null
      } else if (this.form.email.includes('@')) {
        return true
      } else {
        return false
      }
    },
    emailinvalidFeedback () {
      return (this.emailstate === false) ? '請輸入正確信箱' : ''
    },
    emailvalidFeedback () {
      return this.emailstate === true ? '感謝您的填寫' : ''
    },
    // worry-------------------------------------------------
    worrystate () {
      if (this.form.worry.length === 0) {
        return null
      } else if (this.form.worry.length <= 10) {
        return false
      } else {
        return true
      }
    },
    worryinvalidFeedback () {
      return this.worrystate === false ? '請輸入至少10個字' : ''
    },
    worryvalidFeedback () {
      return this.worrystate === true ? '感謝您的填寫' : ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.axios.post(process.env.VUE_APP_APIURL + '/order', this.form)
        .then(res => {
          console.log(res.data.result)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
      this.$swal({ icon: 'success', title: '預約成功!', confirmButtonText: 'Cool' })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.age = ''
      this.form.number = ''
      this.form.email = ''
      this.form.worry = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onContext (ctx) {
      this.context = ctx
    }
  }
}
</script>
