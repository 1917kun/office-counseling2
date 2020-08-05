<template lang="pug">
  #column
    b-container.h-100.d-flex.justify-content-center.align-items-center
      b-row
        b-col.columntop.d-flex.flex-column
          span.text-center(:style="{color:'#FFFFFF'}") EVENTS & CLASSES
          span.text-center(:style="{color:'#ef8c52',fontweight:'bolder'}") 傾心活動＆講座
    //-column-----------------------------------------------------------------------------
    b-container.columns
      b-row
        b-col.columnhover(cols="12" sm="6" md="4"  v-for="(column,index) in columns" :key="index")
          b-card(:img-src="column.src" overlay text-variant="white")
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
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '456',
          like: '4',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '25',
          like: '3',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '887',
          like: '5',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '471',
          like: '7',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '782',
          like: '41',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '374',
          like: '52',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '546',
          like: '13',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '397',
          like: '45',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '985',
          like: '7',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '564',
          like: '35',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '374',
          like: '23',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '568',
          like: '46',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '255',
          like: '12',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '131',
          like: '19',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '687',
          like: '42',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '575',
          like: '75',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '332',
          like: '66',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '874',
          like: '77',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '331',
          like: '54',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '465',
          like: '25',
          leavemessage: '留言'

        },
        {
          src: 'https://picsum.photos/1920/1920/?random=51',
          title: '榮格心理學與藝術治療：平衡人生的光與影',
          num: '321',
          like: '22',
          leavemessage: '留言'

        }
      ],
      footers: [
        {
          logoimg: '/img/logo.svg',
          imgsrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw'
        }
      ]
    }
  }
}
</script>
