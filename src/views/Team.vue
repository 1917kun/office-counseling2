<template lang="pug">
  #team(:style="{background: 'url(./img/team/team.svg) no-repeat fixed center/cover'}")
    b-container.h-100.d-flex.justify-content-center.align-items-center
      b-row
        b-col.teamtop.d-flex.flex-column
          span.text-center(:style="{color:'#e9a040'}") DOCTOR & COUNSELOR
          span.text-center(:style="{color:'#4b7fc9',fontweight:'bolder'}") 傾心醫師&心理師
    b-container.people
      b-row.dean
        b-col.teammenber(cols="12").d-flex.flex-column.align-items-center
          div
            img(:src="'./img/team/9.jpg'" width="256px" height="214px'")
          span.pt-2 呂昆承
          span 院長
        vue-easy-lightbox(:visible='visible' :imgs='teams' :index='index' @hide='handleHide')
      b-row.team
        b-col.teammenber(cols="12" sm="4" v-for="(team,index) in teams" :key="index").d-flex.flex-column.align-items-center
          div.pic(@click="showImg(index)")
            img(:src='team.name' width="256px" height="214px")
          span.pt-2 {{team.description}}
          //- span {{team.position}}
        vue-easy-lightbox(:visible='visible' :imgs='team' :index='index' @hide='handleHide')
    //- footer---------------------------------------------------
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
      visible: false,
      index: 0,
      teams: [
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=51',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=52',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=53',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // },
        // {
        //   src: 'https://picsum.photos/1920/1080/?random=50',
        //   name: 'XXX',
        //   position: '心理醫師'
        // }
      ],
      footers: [
        {
          logoimg: './img/logo.svg',
          imgsrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw'
        }
      ]
    }
  },
  methods: {
    showImg (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/member')
      .then(response => {
        this.teams = response.data.result
        for (const i of this.teams) {
          i.name = process.env.VUE_APP_APIURL + '/file/' + i.name
        }
      })
      .catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>
