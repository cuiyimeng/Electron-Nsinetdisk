<template>
<div>
  <div>
    <md-theme v-if="statue" md-name="login">
      <md-progress md-primary md-indeterminate></md-progress>
    </md-theme>
  </div>
  <div class="input-form">    
    <md-input-container>
      <md-icon>account_box</md-icon>
      <label>请输入你的账号</label>
      <md-input :v-model="user.name"></md-input>
    </md-input-container>
    <md-input-container>
      <md-icon>lock</md-icon>
      <label>请输入你的密码</label>
      <md-input :v-model="user.passwd"></md-input>
    </md-input-container>
    <md-button :disabled="statue" class="md-raised md-primary">
      登录
    </md-button>
  </div>
</div>
</template>

<style>
.input-form{
  width: 500px;
  margin-left: 90px;
  margin-top: 40px;
  padding-top: 5px;
}
</style>

<script>
export default {
  data () {
    return {
      statue: false,
      user: {
        passwd: '11',
        name: ''
      }
    }
  }
}
</script>
