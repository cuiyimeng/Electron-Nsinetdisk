<template>
  <div class="file">
    <div class="file-list">
      <md-list>

        <div v-for="(i , index) in filelist" :key="index" class="box">
          <md-theme md-name="myfile">
            <md-list-item @click="fileoperation(i.fileid)">
              <md-avatar>
                <md-icon>{{ i.type }}</md-icon>
              </md-avatar>
              <div class="md-list-text-container" md-name="myfile">
                <span class="md-primary">{{ i.name }}</span>
                <span v-if="i.size">{{ i.size + 'M' }}</span>
                <span> {{ i.remark }}</span>
              </div>
              <md-button @click="fileinfo(i.fileid)" class="md-icon-button md-list-action">
                <md-icon class="md-primary">info</md-icon>
              </md-button>
            </md-list-item>
          </md-theme>
        </div>

      </md-list>
    </div>

    <md-dialog-alert :md-title="alert.title" :md-content-html="alert.html" ref="dialog"></md-dialog-alert>
  </div>
</template>

<style>
.file {
  margin-top: 25px;
}
.box {
  margin-top: 15px;
}
.s-title {
  margin-left: 30px;
}
</style>

<script>
export default {
  data () {
    return {
      filelist: [],
      alert: {
        title: 'NaN',
        html: 'NaN'
      },
      path: '/'
    }
  },
  mounted () {
    var tmp = {
      '111111': {'fileid': 111111, 'size': '11111', 'type': 'code', 'name': 'main.py', 'remark': '代码文件', 'time': '2017-08-09 12:21:22', 'user': '李开'},
      '111121': {'fileid': 111121, 'size': '11111', 'type': 'videocam', 'name': '高清重置.mp4', 'remark': '视频文件', 'time': '2017-08-09 12:21:22', 'user': '李开'},
      '113121': {'fileid': 113121, 'size': '11111', 'type': 'music_video', 'name': '高清重置1.mp3', 'remark': '音频文件', 'time': '2017-08-09 12:21:22', 'user': '李开'},
      '113101': {'fileid': 113101, 'size': '11111', 'type': 'android', 'name': '神器.apk', 'remark': 'Android安装包', 'time': '2017-08-09 12:21:22', 'user': '李开'},
      '113151': {'fileid': 113151, 'size': '', 'type': 'folder', 'name': '这里有好玩意', 'remark': '文件夹', 'time': '2017-08-09 12:21:22', 'user': '李开'},
      '113133': {'fileid': 113133, 'size': '11111', 'type': 'insert_drive_file', 'name': '这里有好玩意', 'remark': '其他文件', 'time': '2017-08-09 12:21:22', 'user': '李开'},
      '113136': {'fileid': 113133, 'size': '11111', 'type': 'archive', 'name': '这里有好玩意', 'remark': '压缩文件', 'time': '2017-08-09 12:21:22', 'user': '李开'}
    }
    this.filelist = tmp
  },
  methods: {
    fileoperation (fileid) {
      console.log(fileid)
    },
    fileinfo (fileid) {
      this.alert.title = 'ID: ' + fileid + ' 的详细信息'
      this.alert.html =
      '类型: ' + this.filelist[fileid].remark + '<br>' +
      '大小: ' + (this.filelist[fileid].size ? this.filelist[fileid].size + 'M' : '不存在') + ' <br>' +
      '所有者: ' + this.filelist[fileid].user + '<br>' +
      '创建时间: ' + this.filelist[fileid].time + '<br>'
      this.openDialog()
    },
    openDialog () {
      this.$refs['dialog'].open()
    }
  }
}
</script>
