<template>
  <div id="back" class="" style="padding-top:3rem">
    <h1 class="text-center text-white">後臺管理</h1>
    <div class="container">
      <div class="row justify-content-center">
        <vs-button class="" @click="active=!active" color="primary" type="filled">立即管理</vs-button>
      </div>
      <vs-sidebar
        position-left
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar text-center" slot="header">
          <vs-avatar
            size="120px"
            :src="'./img/manager.jpg'"/>
        </div>
        <div class="manage">
        <vs-sidebar-item to="/cases"  index="1" class="case">
          <h4>個案資料管理</h4>
        </vs-sidebar-item>
        <vs-sidebar-item to="/member"  index="2" class="case">
          <h4>人事資料管理</h4>
        </vs-sidebar-item>
        </div>
      </vs-sidebar>
    </div>
    <div class="container-fluid p-0">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false
  })
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</>
