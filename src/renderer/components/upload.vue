<template>
  <div class="file">
    <div class="s-title">
      <p>上传目录在 {{ path }} </p>
    </div>
    <div class="file-list">
      <md-list>
        <md-subheader class="s-box md-inset">正在上传: </md-subheader>
        <div v-for="(i , index) in list.downloading" :key="index">
          <md-theme md-name="download">
            <md-list-item>
              <md-avatar>
                <md-icon class="md-primary">{{ i.type }}</md-icon>
              </md-avatar>
              <div class="md-list-text-container" md-name="myfile">

                <md-layout md-gutter>
                  <md-layout md-flex="85">
                    <span class="md-primary">{{ i.name }}</span>                                    
                  </md-layout>
                  <md-layout>
                    <span>{{ i.progress + '%' }} </span>                    
                  </md-layout>
                </md-layout> 

                <md-progress class="md-accent" :md-progress="i.progress"></md-progress>         
                <md-layout md-gutter>
                  <md-layout md-flex="85">
                    <span v-if="i.size">{{ i.size }}</span>                                        
                  </md-layout>
                  <md-layout>
                    <span>{{ i.speed }} </span>
                  </md-layout>
                </md-layout>  
              </div>
              <md-button @click="stop(i.fileid)" class="md-icon-button md-list-action">
                <md-icon class="md-primary">close</md-icon>
                <md-tooltip md-direction="bottom">取消上传</md-tooltip>
              </md-button>
            </md-list-item>
          </md-theme>
        </div>

      </md-list>
    </div>

    <div class="file-list">
      <md-list>
        <md-subheader class="s-box md-inset">已上传: </md-subheader>
        <div v-for="(i , index) in list.downloaded" :key="index">
          <md-theme md-name="downloaded">
            <md-list-item>
              <md-avatar>
                <md-icon class="md-primary">{{ i.type }}</md-icon>
              </md-avatar>
              <div class="md-list-text-container" md-name="myfile">

                <md-layout md-gutter>
                  <md-layout md-flex="85">
                    <span class="md-primary">{{ i.name }}</span>                                    
                  </md-layout>
                  <md-layout>
                    <span>100 %</span>                    
                  </md-layout>
                </md-layout> 

                <md-progress class="md-primary" :md-progress="100"></md-progress>         
                <md-layout md-gutter>
                  <md-layout md-flex="85">
                    <span v-if="i.size">{{ i.size }}</span>                                        
                  </md-layout>
                  <md-layout>
                    <span>{{ i.speed }} </span>
                  </md-layout>
                </md-layout>  
              </div>
              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">folder</md-icon>
                <md-tooltip md-direction="bottom">打开上传文件夹</md-tooltip>
              </md-button>
            </md-list-item>
          </md-theme>
        </div>

      </md-list>
    </div>
    <md-snackbar md-position="bottom left"  ref="snackbar" :md-duration="1000">
      <span>已经删除上传</span>
    </md-snackbar>
    <!-- <md-dialog-alert :md-title="alert.title" :md-content-html="alert.html" ref="dialog"></md-dialog-alert> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: {
        downloading: '',
        downloaded: ''
      },
      path: '/'
    }
  },
  mounted () {
    this.list.downloading = {
      'lksosj': {'name': 'main.py', 'size': '11111M', 'type': 'code', 'progress': 80.67, 'fileid': 'lksosj', 'speed': '1000.45 K/s'},
      'lksoss': {'name': 'main.py', 'size': '11111M', 'type': 'code', 'progress': 80.67, 'fileid': 'lksosj', 'speed': '1000.45 K/s'},
      'aksosj': {'name': 'main.py', 'size': '11111M', 'type': 'videocam', 'progress': 80.67, 'fileid': 'lksosj', 'speed': '1000.45 K/s'}
    }
    this.list.downloaded = {
      'lksosj': {'name': 'main.py', 'size': '11111M', 'type': 'code', 'fileid': 'lksosj', 'path': '/'},
      'lksoss': {'name': 'main.py', 'size': '11111M', 'type': 'code', 'fileid': 'lksoss', 'path': '/'},
      'aksosj': {'name': 'main.py', 'size': '11111M', 'type': 'videocam', 'fileid': 'aksosj', 'path': '/'}
    }
  },
  methods: {
    stop (id) {
      this.$refs.snackbar.open()
      console.log(id)
    }
  }
}
</script>

<style>
.s-title {
  margin-left: 20px;
  margin-top: -20px;
}
.s-box {
  margin-top: -50px;
}
</style>
