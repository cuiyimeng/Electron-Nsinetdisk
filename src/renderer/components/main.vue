<template>
<div>
        <div>
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
                <md-button class="md-icon-button" @click="sideNav">
                    <md-icon>menu</md-icon>
                </md-button>

                <span style="flex: 1;"></span>

                <md-input-container  class="search" v-show="formStatus">
                    <md-icon>search</md-icon>
                    <md-input placeholder='搜索'></md-input>
                </md-input-container>

                <md-menu md-size="4">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>filter_list</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item v-show="loginStatus">
                            <md-icon>settings</md-icon>
                            <span>设置</span>
                        </md-menu-item>

                        <md-menu-item>
                            <md-icon>keyboard_arrow_down</md-icon>
                            <span>最小化</span>
                        </md-menu-item>

                        <md-menu-item>
                            <md-icon>exit_to_app</md-icon>
                            <span>退出</span>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>

            </div>

            <div class="md-toolbar-container">
                <h2 class="md-title">NSI - NetDisk - NG</h2>
                <md-button class="md-fab md-mini" v-show="formStatus">
                    <md-icon>add</md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-dialog-alert :md-title="alert.title"  :md-content-html="alert.html" ref="dialog"></md-dialog-alert>
        <md-sidenav class="md-left" ref="leftSidenav">
            <md-card>
                <md-card-media-cover md-text-scrim>
                    <md-card-media md-ratio="16:9">
                        <img src="~@/assets/background.jpg" alt="Skyscraper">
                    </md-card-media>
                    <md-card-area>
                        <md-card-header>
                            <div class="md-title"> {{ user.name }} </div>
                        </md-card-header>

                        <md-card-actions v-show="loginStatus">
                            <md-button>注销</md-button>
                        </md-card-actions>
                    </md-card-area>
                </md-card-media-cover>
            </md-card>
            <md-list>
                <div v-show="loginStatus" @click="closeNavBar">
                    <md-list-item>
                        <router-link to="/myfile">
                            <md-icon>home</md-icon> <span>我的文件</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/upload">
                            <md-icon>cloud_upload </md-icon> <span>上传列表</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/download">
                            <md-icon>cloud_download</md-icon> <span>下载列表</span>
                        </router-link>
                    </md-list-item>

                    <hr>
                    <md-list-item @click="about">
                            <span>About Software</span>
                    </md-list-item>
                    <md-list-item @click="aboutme">
                            <span>About Me</span>
                    </md-list-item>
                </div>
                
            </md-list>
        </md-sidenav>
    </div>
        <router-view></router-view>
    </div>
</template>

<style lang="less">
  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
  }
  .search {
      width: 210px;
  }
</style>

<script>
export default {
  data () {
    return {
      user: {
        name: 'TestName'
      },
      loginStatus: true,
      formStatus: true,
      alert: {
        title: 'NaN',
        html: 'NaN'
      }
    }
  },
  methods: {
    aboutme () {
      this.alert.title = 'About Me'
      this.alert.html = 'Author: AliasZet <br> BuildTime: 2017-09-15 22:10 <br> Project: https://github.com/mrlk/'
      this.openDialog()
    },
    about () {
      this.alert.title = 'About Software'
      this.alert.html =
      'Electron: ' + process.versions['atom-shell'] + '<br>' +
      'Platform: ' + require('os').platform() + '<br>' +
      'Vue: ' + require('vue/package.json').version + '<br>' +
      'License: ' + 'GNU General Public License V3(GPL-V3)' + '<br>' +
      'UI: ' + 'Vue-Material ' + require('vue-material/package.json').version + '<br><br>' +
      'Design By Google'
      this.openDialog()
    },
    // Global Functions.
    closeNavBar () {
      this.$refs.leftSidenav.toggle()
    },
    sideNav () {
      this.$refs.leftSidenav.toggle()
    },
    openDialog () {
      this.$refs['dialog'].open()
    },
    closeDialog () {
      this.$refs['dialog'].close()
    }
  }
}
</script>
