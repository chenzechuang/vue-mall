<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="loginForm.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="loginForm.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script>
  export default {
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        } 
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('user/login', this.loginForm)
          .then(() => {
            this.$router.push({ path: this.redirect || '/'})
            // this.loading = false
          })
          .catch(() => {
            // this.loading = false
          })
      }
    },
  }
</script>
<style lang="less">
  h1 {
    width: 750px;
  }
</style>