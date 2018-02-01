<template>
  <div>
    <md-content>
      <!-- <p>* 我不会收集你的个人信息, 请放心使用</p> -->
      <h2>请输入你的酷课网账号登录</h2>
    </md-content>
    <md-field :class="errorStatus" md-clearable>
      <md-icon>account_box</md-icon>
      <label>账号</label>
      <md-input v-model="userName" required md-counter="30"></md-input>
    </md-field>

    <md-field :class="errorStatus">
      <md-icon>lock</md-icon>
      <label>密码</label>
      <md-input v-model="password" required maxlength="30" type="password"></md-input>
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
    errorStatus: null
  }),
  methods: {
    login () {
      // 检查username, password
      this.errorStatus = {
        'md-invalid': true
      }
    }
  }
}
</script>