<template>
  <div>
    <md-field :class="accountMessageClass" md-clearable>
      <md-icon>account_box</md-icon>
      <label>账号</label>
      <md-input v-model="userName" required md-counter="30"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field :class="passwordMessageClass">
      <md-icon>lock</md-icon>
      <label>密码</label>
      <md-input v-model="password" required maxlength="30" type="password"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-content>
      <p>* 我不会收集你的个人信息, 请放心使用</p>
    </md-content>
    <md-button class="md-raised md-primary" @click="login">登录</md-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    userName: null,
    password: null,
    accountMessageClass: null,
    passwordMessageClass: null
  }),
  methods: {
    login () {
      if (!this.userName) {
        this.accountMessageClass = {
          'md-invalid': false
        }
      }
      if (!this.password) {
        this.passwordMessageClass = {
          'md-invalid': false
        }
      }
      // 检查username, password
    }
  }
}
</script>