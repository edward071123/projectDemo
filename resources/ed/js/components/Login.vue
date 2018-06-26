<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>請檢查帳號密碼是否正確</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email"  class="form-control" placeholder="user@example.com" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">密碼</label>
                <input type="password" id="password"  class="form-control" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-default">登入</button>
        </form>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        email: "test02@gmail.com",
        password: "123123",
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