<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <a href="https://www.reddotsolution.com/">REDDOT SOLUTION © 2018</a>.
        <a href="https://www.facebook.com/%E7%9D%BF%E5%BE%B7%E8%B3%87%E8%A8%8A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-258767387485030/?fref=ts">
            <span class="icon1">
              <i class="fa fa-facebook"></i>
            </span>
          </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return this.$store.state.pkg
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';
.icon1{
    display: inline-block;
    font-size: 21px;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    width: 1.5rem;
  }
.footer {
  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
