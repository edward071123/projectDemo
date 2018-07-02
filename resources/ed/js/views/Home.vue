<template>
  <div class="content has-text-centered home-content">
    <p>
      <img width="200" src="~assets/logo_baotai.png" :alt="description">
      <button @click="increase">+</button>累積的值{{count}}
    </p>
  </div>
</template>

<script>
import {
    mapActions,
    mapGetters
  } from 'vuex'

export default {
  data () {
    return this.$store.state.pkg
  },
  name: 'count',
  methods: {
      ...mapActions([
        'increase' //對應template的click觸發的action
      ])
    },
  computed: {
    ...mapGetters([
      'count' //對應到畫面上的{{count}}
    ])
  }

}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';
.home-content{
  margin-right:180px;
  @include mobile {
    margin-right:0px;
  }
}
</style>
