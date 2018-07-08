<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/admin">
            <img src="~assets/logo_baotai.png" :alt="pkginfo.description">
            <div class="is-hidden-mobile">
                <span class="vue">寶台建設</span><strong class="admin">後台管理系統</strong>
              </div>
          </a>
        </div>
        <div class="nav-right is-flex">
          <ul class="control-btn-bar">
            <li v-if="$auth.check()" >
                <a href="/admin" @click="logOut($auth)">登出</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'

export default {

  components: {
    Tooltip
  },

  props: {
    show: Boolean
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),

  methods: mapActions([
    'toggleSidebar',
    'logOut'
  ])
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';
.control-btn-bar{
  margin-top:2%;
  margin-right:1%;
  @include mobile {
    margin-top:7%;
    margin-right:5%;
  }
}
.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
