<template>
  <div class="content has-text-centered home-content">
    <p>
      <img width="200" src="~assets/logo_baotai.png" :alt="description">
    </p>
  </div>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
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
