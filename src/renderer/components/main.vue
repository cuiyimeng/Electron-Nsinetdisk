<template>
    <div>
        <div class="title">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    
                    <md-button class="md-icon-button" @click="sideNav">
                        <md-icon>menu</md-icon>
                    </md-button>

                    <span style="flex: 1;"></span>

                    <md-input-container class="search" disable v-show="formStatus">
                        <md-icon>search</md-icon>
                        <md-input placeholder='搜索' disabled></md-input>
                    </md-input-container>

                    <md-menu md-size="4">
                        <md-button class="md-icon-button" md-menu-trigger>
                            <md-icon>filter_list</md-icon>
                        </md-button>

                        <md-menu-content>
                            <md-menu-item v-show="loginStatus" @click="openDialog('setting')">
                                <md-icon>settings</md-icon>
                                <span>设置</span>
                            </md-menu-item>

                            <md-menu-item @click="minimize">
                                <md-icon>keyboard_arrow_down</md-icon>
                                <span>最小化</span>
                            </md-menu-item>

                            <md-menu-item @click="exit">
                                <md-icon>exit_to_app</md-icon>
                                <span>退出</span>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>

                </div>

                <div class="md-toolbar-container">
                    <h3 class="md-title"> {{ title }}</h3>

                    <md-theme md-name='main' v-show="loginStatus">
                        <md-speed-dial md-open="hover" md-direction="right" class="md-fab md-mini" v-show="formStatus">
                            <md-button class="md-fab md-mini" md-fab-trigger>
                                <md-icon md-icon-morph>add</md-icon>
                                <md-icon>add</md-icon>
                            </md-button>

                            <md-button class="md-fab md-primary md-mini md-clean">
                                <md-icon>insert_drive_file</md-icon>
                                <md-tooltip md-direction="bottom">上传文件</md-tooltip>
                            </md-button>

                            <md-button class="md-fab md-primary md-mini md-clean" @click="openDialog('createFolder')">
                                <md-icon>folder</md-icon>
                                <md-tooltip md-direction="bottom">新建文件夹</md-tooltip>
                            </md-button>

                        </md-speed-dial>
                    </md-theme>
                </div>
            </md-toolbar>
            <md-dialog-alert :md-title="alert.title" :md-content-html="alert.html" ref="dialog"></md-dialog-alert>
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
                                <md-button @click="logout">注销</md-button>
                            </md-card-actions>
                        </md-card-area>
                    </md-card-media-cover>
                </md-card>
                <md-list>
                    <div v-show="loginStatus" @click="closeNavBar">
                        <div @click="changeStat('yes')">
                            <md-list-item>
                                <router-link to="/myfile">
                                    <md-icon>home</md-icon>
                                    <span>我的文件</span>
                                </router-link>
                            </md-list-item>
                        </div>
                        <div @click="changeStat('no')">
                            <md-list-item>
                                <router-link to="/upload">
                                    <md-icon>cloud_upload </md-icon>
                                    <span>上传列表</span>
                                </router-link>
                            </md-list-item>

                            <md-list-item>
                                <router-link to="/download">
                                    <md-icon>cloud_download</md-icon>
                                    <span>下载列表</span>
                                </router-link>
                            </md-list-item>
                        </div>
                    </div>
                    <div>
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
            <!-- Create Folder Dialog Start -->

            <md-dialog md-open-from="#fab" md-close-to="#fab" ref="createFolder">
                <md-dialog-title>新建文件夹</md-dialog-title>

                <md-dialog-content>
                    <md-input-container>
                        <label>新文件夹名</label>
                        <md-textarea></md-textarea>
                    </md-input-container>
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog('createFolder')">取消</md-button>
                    <md-button class="md-primary" @click="createNewFolder">确定</md-button>
                </md-dialog-actions>
            </md-dialog>
            <!-- Create Folder Dialog End -->

            <!-- Setting Dialog Start -->
            <md-dialog md-open-from="#fab" md-close-to="#fab" ref="setting">
                <md-dialog-title>设置</md-dialog-title>

                <md-dialog-content style="width: 500px">
                    <md-layout md-gutter>
                        <md-layout>
                            <md-button>
                                <md-icon @click="setDownloadPath">settings</md-icon>
                            </md-button>
                        </md-layout>
                        <md-layout md-flex="75">
                            <md-input-container>
                                <label>下载位置</label>
                                <md-input readonly v-model="setting.path"></md-input>
                            </md-input-container>
                        </md-layout>
                    </md-layout>

                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog('setting')">取消</md-button>
                    <md-button class="md-primary" @click="saveSetting">保存</md-button>
                </md-dialog-actions>
            </md-dialog>
            <!-- Setting DiaLog End -->

        </div>
        <md-snackbar md-position="bottom left" ref="snackbar" :md-duration="4000">
            <span>{{ info }}</span>
        </md-snackbar>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -10px;
    left: 16px;
  }
  .search {
      width: 210px;
  }
</style>

<script>
const {ipcRenderer} = require('electron')

export default {
  data () {
    return {
      user: {
        name: 'TestName'
      },
      loginStatus: false,
      formStatus: true,
      alert: {
        title: 'NaN',
        html: 'NaN'
      },
      title: 'NSI - NetDisk - NG',
      setting: {
        path: '/'
      },
      snackbar: ''
    }
  },
  mounted () {
    // Login Status.
    if (this.loginStatus) {
      this.$router.push('/myfile')
    } else {
      this.formStatus = this.loginStatus
      this.user.name = '欢迎'
      this.title = '登录'
      this.$router.push('/login')
    }
  },
  methods: {
    aboutme () {
      this.alert.title = 'About Me'
      this.alert.html = 'Author: AliasZet <br> BuildTime: 2017-09-15 22:10:11 <br> Project: https://github.com/mrlk/'
      this.openDialog('dialog')
    },
    about () {
      this.alert.title = 'About Software'
      this.alert.html =
      'Electron: ' + process.versions['atom-shell'] + '<br>' +
      'Platform: ' + require('os').platform() + '<br>' +
      'Vue: ' + require('vue/package.json').version + '<br>' +
      'UI: ' + 'Vue-Material ' + require('vue-material/package.json').version +
      'License: ' + 'GNU General Public License V3(GPL-V3)' + '<br>' + '<br>' +
      'Design By Google' + '<br>' +
      'Thanks for OpenSource Project.'
      this.openDialog('dialog')
    },
    choseFile () {
      console.log(1)
    },
    setDownloadPath () {
      console.log('downloadPath')
    },
    saveSetting () {
      console.log('SaveSetting')
      this.closeDialog('setting')
    },
    createNewFolder () {
      console.log('CreateNewFolder')
      this.closeDialog('createFolder')
    },
    logout () {
      console.log('logout')
      this.closeNavBar()
      this.$router.go('/')
    },
    changeStat (stat) {
      if (stat === 'yes') {
        this.formStatus = true
      } else {
        this.formStatus = false
      }
    },
    // Global Functions.
<<<<<<< HEAD
    openSnackbar () {
      this.$refs.snackbar.open()
=======
    minimize () {
      ipcRenderer.send('minimize')
    },
    exit () {
      ipcRenderer.sendSync('quit')
>>>>>>> 974110598553b8617dce44d341fdb3f106398651
    },
    closeNavBar () {
      this.$refs.leftSidenav.toggle()
    },
    sideNav () {
      this.$refs.leftSidenav.toggle()
    },
    openDialog (dialog) {
      this.$refs[dialog].open()
    },
    closeDialog (dialog) {
      this.$refs[dialog].close()
    }
  }
}
</script>
