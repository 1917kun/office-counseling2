<template lang="pug">
  #column(:style="{background: 'url(./img/column/column.svg) no-repeat fixed center/cover'}")
    b-container.h-100.d-flex.justify-content-center.align-items-center
      b-row
        b-col.columntop.d-flex.flex-column
          span.text-center(:style="{color:'#FFFFFF'}") EVENTS & CLASSES
          span.text-center(:style="{color:'#ef8c52',fontweight:'bolder'}") 傾心活動＆講座
    //-column-----------------------------------------------------------------------------
    b-container.columns
      b-row
        b-col.columnhover(cols="12" sm="6" md="4"  v-for="(column,index) in columns" :key="index")
          b-card.cc(:img-src="column.src" overlay text-variant="white")
            b-card-text.text
              div.texttop
                span 傾心
                span 2020年7月27日．1分鐘
              div.textbottom
                div
                  h5 {{ column.title }}
                div.textbottomend
                  div.endtop
                    font-awesome-icon(:icon="['fas', 'eye']").mr-2
                    p.mr-4 {{ column.num }}
                    p {{ column.leavemessage }}
                  span
                    | {{column.like}}
                    font-awesome-icon(:icon="['fab', 'gratipay']")
    //- footer-----------------------------------------------------------------------------
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
      columns: [
        {
          src: './img/column/1.jpg',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '456',
          like: '4',
          leavemessage: '留言'

        },
        {
          src: './img/column/2.jpg',
          title: '09/12~09/13 (進階班) 內在小孩自我療癒進階工作坊',
          num: '25',
          like: '3',
          leavemessage: '留言'

        },
        {
          src: './img/column/3.jpg',
          title: '09/17-10/29 自我心理學講堂進階六堂課',
          num: '887',
          like: '5',
          leavemessage: '留言'

        },
        {
          src: './img/column/4.jpg',
          title: '09/19-09/20 人我關係與情緒界線護衛二日工作坊',
          num: '471',
          like: '7',
          leavemessage: '留言'

        },
        {
          src: './img/column/5.jpg',
          title: '08/15-08/16 療癒職場傷害_重新站起來二日工作坊',
          num: '782',
          like: '41',
          leavemessage: '留言'

        },
        {
          src: './img/column/6.jpg',
          title: '08/29-08/30 親密關係中的安全感練習二日工作坊',
          num: '374',
          like: '52',
          leavemessage: '留言'

        },
        {
          src: './img/column/7.jpg',
          title: '08/29-08/30 親密關係中的安全感練習二日工作坊',
          num: '546',
          like: '13',
          leavemessage: '留言'

        },
        {
          src: './img/column/8.jpg',
          title: '誰沒有內心戲，談人際關係及親子溝通',
          num: '397',
          like: '45',
          leavemessage: '留言'

        },
        {
          src: './img/column/9.jpg',
          title: '《戀愛這種病：解讀自我與對方的人格，診斷愛情的現在與未來》',
          num: '985',
          like: '7',
          leavemessage: '留言'

        },
        {
          src: './img/column/10.jpg',
          title: '心理彈性工作坊：第一次學ACT就上手',
          num: '564',
          like: '35',
          leavemessage: '留言'

        },
        {
          src: './img/column/11.jpg',
          title: '練習不壓抑——傾聽自己內心聲音的第一堂課',
          num: '374',
          like: '23',
          leavemessage: '留言'

        },
        {
          src: './img/column/12.jpg',
          title: '以心理學為基礎的職場時間/能量管理技巧',
          num: '568',
          like: '46',
          leavemessage: '留言'

        },
        {
          src: './img/column/13.jpg',
          title: '找回心理界限，搞定情緒勒索',
          num: '255',
          like: '12',
          leavemessage: '留言'

        },
        {
          src: './img/column/14.jpg',
          title: '三個人的晚餐,談劈腿及外遇',
          num: '131',
          like: '19',
          leavemessage: '留言'

        },
        {
          src: './img/column/15.jpg',
          title: '「從童話《不來梅樂隊》看人生下半場」免費講座',
          num: '687',
          like: '42',
          leavemessage: '留言'
        }
      ],
      footers: [
        {
          logoimg: './img/logo.svg',
          imgsrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw'
        }
      ]
    }
  }
}
</script>
