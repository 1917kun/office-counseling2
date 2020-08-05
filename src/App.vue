<template lang="pug">
#app
  b-navbar#nav.shadow(toggleable='sm' type='light' variant="light")
    b-container
      b-navbar-brand(@click="redirect" :style="{cursor:'pointer'}")
        img(src="../public/img/logo.svg" width="84" height="57")
        strong(:style="{color:'#0F4C81'}") 傾心診所
      b-navbar-toggle(target='nav-text-collapse')
      b-collapse#nav-text-collapse.thenavtexttop(is-nav)
        b-navbar-nav.w-100.navtext
          b-nav-item(v-for="(link,index) in links" :key="index" :to='link.link') {{ link.text }}
          b-nav-text
            span 診所專線
            span 02-89416928
  keep-alive
      router-view
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          link: '/service', text: '服務項目'
        },
        {
          link: '/team', text: '團隊介紹'
        },
        {
          link: '/column', text: '活動&講座'
        },
        {
          link: '/reserve', text: '初診預約'
        }
      ]
    }
  },
  methods: {
    redirect () {
      this.$router.push('/')
    }
  }
}
</script>
