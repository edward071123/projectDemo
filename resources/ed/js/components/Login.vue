<template>
    <div>
      <div class="tile is-parent is-10">
        <article class="tile is-child box">
            <h1 class="title">登入</h1>
            <div class="alert alert-danger" v-if="error">
                <p>請檢查帳號密碼是否正確</p>
            </div>
            <form autocomplete="off" @submit.prevent="login" method="post">
              <div class="block control">
                <p class="control has-icon">
                  <input  type="email" id="email"  class="input" placeholder="user@example.com" v-model="email" required>
                  <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                  </span>
                </p>
                <p class="control has-icon">
                  <input type="password" id="password"  class="input" v-model="password" required>
                  <span class="icon is-small">
                    <i class="fa fa-lock"></i>
                  </span>
                </p>
                <p class="control">
                  <button class="button is-success ">
                    登入
                  </button>
                </p>
              </div>
            </form>
        </article>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        email: "test02@gmail.com",
        password: "123123",
        // email: "",
        // password: "",
        error: false
      }
    },
    methods: {
      login(){
        var app = this
        this.$auth.login({
            params: {
              email: app.email,
              password: app.password
            }, 
            success: function () {},
            error: function () {},
            rememberMe: true,
            redirect: '/dashboard',
            fetchUser: true,
        });       
      },
    }
  } 
</script>
<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';
.title{
  text-align: center;
}
.control{
  margin-left: 10%;
}
.input{
  width:80%;
}

.control.has-addons {
  @include mobile() {
    input {
      width: 100%;
    }
    input.is-expanded {
      flex-shrink: 1;
    }
  }
}
</style>