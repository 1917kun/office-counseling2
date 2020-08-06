<template lang="pug">
  #service(:style="{background: 'url(./img/service/eNplec2.jpg) no-repeat fixed center/cover'}")
    b-container.h-100
    //- Professional ---------------------------------------------
    b-container(fluid)(:style="{background:'#809ec925'}")
      b-container.d-flex.justify-content-center
        b-row.professionrow
          b-col.professioncol1(cols="12")
            img.img1(:src="'./img/logo.jpg'")
            h1(:style="{color:'#a9a9a9'}") 傾心的專業協助
            p.text-left 一般人進入諮商診所後往往因緊張而不知道該如何開口尋求幫助,本診所將會由醫師或是心理師,為您進行第一次會談評估,再建議最適合您的諮商或治療方式。
            p.text-left 無論是進行藥物治療、心理會談治療、給兒童的團體訓練課程，我們都有完整的醫療團隊提供。
          b-col.professioncol2(cols="12" sm="4" v-for="(service, index) in services" :key="index")
            img.img2(:src='service.src')
            p {{service.span}}
            p.text-left {{service.text}}
    //- service-----------------------------------------------------------
    b-container(fluid)(:style="{background:'white'}")
      b-row
        b-col.servicebox1
          div.text-center
            p.servicetext 傾心專業服務
    b-container
      b-row.justify-content-center
        b-col.box4(v-for="(servicedata,index) in servicedatas" :key="index" cols="12" sm="4" md="4")
          div {{servicedata.index}}
          div {{servicedata.title}}
          p {{servicedata.des}}
          a(href="#") {{servicedata.link}}
    //- reservation-------------------------------------------------------
    b-container.servicereservation(fluid).p-o
      b-row.servicereservationrow
        b-col(cols="12" lg="6" :style="{background: 'url(./img/service/2223.jpg) no-repeat center/cover'}").servicereservationimg
        b-col(cols="12" lg="6").servicereservationtext
          div.ser
            div.servicereservationtextinner
              div
                p.reservationtext 初診預約
            .btn5 線上預約
            div.servicereservationtextinner2
              p 注意事項:
              ol
                li 1.一般門診：可健保或自費看診。
                li 2.初診需視當天心理師或醫師的時段而定，請先至我們網站查詢。
                li 3.現場掛號需耐心等待，且初診需由心理師做初診評估，時間可能較久。
                li 4.為維護診所品質，還未到號前可以至我們的休憩區等待。
    //- Charges-----------------------------------------------------------------
    b-container#Charges(fluid).p-0.servicecharges
      img.servicechargesimg(:src="'./img/service/charge.png'")
    //- footer---------------------------------------------------
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
      services: [
        {
          src: './img/service/1.jpg',
          span: '評估機制',
          text: '提供完整的評估與治療，只要會談完第一次，後續會為您安排適切的協助模式。'
        },
        {
          src: './img/service/2.jpg',
          span: '藥物＆心理諮商',
          text: '提供完整的評估與治療，只要會談完第一次，後續會為您安排適切的協助模式。'
        },
        {
          src: './img/service/3.jpg',
          span: '團體課程',
          text: '提供完整的評估與治療，只要會談完第一次，後續會為您安排適切的協助模式。'
        }
      ],
      servicedatas: [
        {
          index: '1',
          title: '憂鬱症',
          des: '憂鬱情緒過久使生活受到影響，藉由評估給予心理、藥物治療，能夠改善憂鬱症的影響，並提升生活品質。',
          link: '閱讀更多'
        },
        {
          index: '2',
          title: '壓力與失眠',
          des: '難以入睡、多夢或是睡眠品質不佳，傾心會了解困擾你的是生理或心理因素，並提供藥物或正念訓練。',
          link: '閱讀更多'
        },
        {
          index: '3',
          title: '兒童與青少年',
          des: '學習與學業總是華人社會的重點，在傾心診所裡的諮商師，將會與家長與學生一起面對這個重大議題。',
          link: '閱讀更多'
        },
        {
          index: '4',
          title: '伴侶及婚姻',
          des: '在伴侶/夫妻之間，因各式各樣的問題發生衝突,伴侶諮商就是要協助伴侶雙方打破負向循環，找出核心問題後打造更健康的關係。',
          link: '閱讀更多'
        },
        {
          index: '5',
          title: '心理諮商',
          des: '傾心針對個案的各種困擾，同時提供藥物、心理諮商、團體諮商甚至是卡片探索，藉由各種方式的相輔相成，進行恰當精準的心理治療。',
          link: '閱讀更多'
        },
        {
          index: '6',
          title: '多元諮商',
          des: '為因應當今世代已慢慢走向多元社會,考慮有些多元族群們需要心理師的幫助,傾心在此方面也不落人後,建立了相當完善的諮商體系。',
          link: '閱讀更多'
        }
      ],
      homefooters: [
        {
          src: 'https://picsum.photos/1920/1080/?random=14',
          imgsrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7080213475365!2d121.41715431500656!3d25.043980983967728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1591237554076!5m2!1szh-TW!2stw'
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
