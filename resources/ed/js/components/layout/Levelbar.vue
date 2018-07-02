<template>
  <nav class="level app-levelbar">
    <div class="level-left">
      <div class="level-item">
        <h3 class="subtitle is-5">
          <strong  v-if="this.getPageName != 'login'">{{ name }}</strong>
        </h3>
      </div>
    </div>
    <div class="level-right is-hidden-mobile">
      <breadcrumb :list="list"></breadcrumb>
    </div>
  </nav>
</template>

<script>
import Breadcrumb from 'vue-bulma-breadcrumb'
import Tooltip from 'vue-bulma-tooltip'

export default {
  components: {
    Breadcrumb,
    Tooltip
  },

  data () {
    return {
      list: null,
      getPageName:""
    }
  },

  created () {
    this.getList()
  },

  computed: {
    name () {
      return this.$route.name
    }
  },

  methods: {
    getList () {
      let matched = this.$route.matched.filter(item => item.name)
      let first = matched[0]
      if (first && (first.name !== '首頁' || first.path !== '' ) ) {
        if(first.name == 'login'){
          matched =[{ name: '', path: '' }]
          this.getPageName = first.name ;
        }else{
          matched = [{ name: '首頁', path: '/' }].concat(matched)
        }
      }
      this.list = matched
    }
  },

  watch: {
    $route () {
      this.getList()
    }
  }
}
</script>
