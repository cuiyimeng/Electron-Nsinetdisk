<template>
  <div class="file">
    <md-list>

      <md-list-item @click="test">
        <md-avatar md-theme='green'>
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
        </div>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">info</md-icon>
        </md-button>
      </md-list-item>

    </md-list>
  </div>
</template>

<style lang="less">
.file {
  margin-top: 25px;
}
</style>

<script>
export default {
  data () {
    return {
      filelist: {
        list: ''
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    test: () => {
      console.log(1)
    },
    getList: () => {
      var tmp = JSON.parse('{"limitSizeTotal":1024,"filelist":[{"NAME":"main.py","USER_NAME":"李开","FILE_ID":30205,"ID":30206,"FILE_SIZE":"2009","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170912083500"},{"NAME":"netdisk","USER_NAME":"李开","FILE_ID":28597,"ID":28598,"FILE_SIZE":"8769608","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170727102139"},{"NAME":"0ldSQL_MySQL_RCE_exploit.py","USER_NAME":"李开","FILE_ID":28565,"ID":28566,"FILE_SIZE":"9099","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170726134103"},{"NAME":"mysql_hookandroot_lib.so","USER_NAME":"李开","FILE_ID":28561,"ID":28562,"FILE_SIZE":"9644","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170726132928"},{"NAME":"mysql_hookandroot_lib.c","USER_NAME":"李开","FILE_ID":28557,"ID":28558,"FILE_SIZE":"3743","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170726132441"},{"NAME":"CentOS5-Base-163 (1).repo","USER_NAME":"李开","FILE_ID":28531,"ID":28532,"FILE_SIZE":"2341","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170725234422"},{"NAME":"10.70.10.33-mysql_history","USER_NAME":"李开","FILE_ID":28509,"ID":28510,"FILE_SIZE":"8279","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170725145036"},{"NAME":"mysql_history-10.70.10.129","USER_NAME":"李开","FILE_ID":28507,"ID":28508,"FILE_SIZE":"14267","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170725145028"},{"NAME":"miui6_6p.zip","USER_NAME":"李开","FILE_ID":28428,"ID":28429,"FILE_SIZE":"723291580","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723202237"},{"NAME":"cloudmusic.apk","USER_NAME":"李开","FILE_ID":28416,"ID":28417,"FILE_SIZE":"31185473","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723194253"},{"NAME":"07CDFD23373B17C6B337251C22B7EA57.apk","USER_NAME":"李开","FILE_ID":28406,"ID":28407,"FILE_SIZE":"4378440","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723183629"},{"NAME":"2 (1) (2).png","USER_NAME":"李开","FILE_ID":28402,"ID":28403,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723183457"},{"NAME":"6d9960899e510fb34d4fbfd8db33c895d0430cfb.gif","USER_NAME":"李开","FILE_ID":28400,"ID":28401,"FILE_SIZE":"2603961","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723183452"},{"NAME":"fileauth (1).txt","USER_NAME":"李开","FILE_ID":28396,"ID":28397,"FILE_SIZE":"64","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723183417"},{"NAME":"Screenshot from 2017-07-17 17-51-38.png","USER_NAME":"李开","FILE_ID":28398,"ID":28399,"FILE_SIZE":"191154","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723183417"},{"NAME":"com.android.chrome_58.0.3029.83_302908300.apk","USER_NAME":"李开","FILE_ID":28394,"ID":28395,"FILE_SIZE":"48309754","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723120555"},{"NAME":"2 (1) (1).png","USER_NAME":"李开","FILE_ID":28392,"ID":28393,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723120407"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28390,"ID":28391,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723112445"},{"NAME":"router-demo_wisewrong.zip","USER_NAME":"李开","FILE_ID":28388,"ID":28389,"FILE_SIZE":"22383","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723112445"},{"NAME":"6d9960899e510fb34d4fbfd8db33c895d0430cfb.gif","USER_NAME":"李开","FILE_ID":28386,"ID":28387,"FILE_SIZE":"2603961","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723111944"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28384,"ID":28385,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723111932"},{"NAME":"07CDFD23373B17C6B337251C22B7EA57.apk","USER_NAME":"李开","FILE_ID":28382,"ID":28383,"FILE_SIZE":"4378440","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723111858"},{"NAME":"2 (1).png","USER_NAME":"李开","FILE_ID":28378,"ID":28379,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723111627"},{"NAME":"2 (1) (1).png","USER_NAME":"李开","FILE_ID":28376,"ID":28377,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723111539"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28374,"ID":28375,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723110858"},{"NAME":"Screenshot from 2017-07-17 17-51-38.png","USER_NAME":"李开","FILE_ID":28372,"ID":28373,"FILE_SIZE":"191154","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723110756"},{"NAME":"router-demo_wisewrong.zip","USER_NAME":"李开","FILE_ID":28370,"ID":28371,"FILE_SIZE":"22383","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723105709"},{"NAME":"2 (1) (1).png","USER_NAME":"李开","FILE_ID":28368,"ID":28369,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723105206"},{"NAME":"2 (1).png","USER_NAME":"李开","FILE_ID":28366,"ID":28367,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723104806"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28364,"ID":28365,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723104703"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28362,"ID":28363,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723104622"},{"NAME":"QQ图片20170418192100.jpg","USER_NAME":"李开","FILE_ID":28360,"ID":28361,"FILE_SIZE":"3765","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723104332"},{"NAME":"fileauth (1).txt","USER_NAME":"李开","FILE_ID":28356,"ID":28357,"FILE_SIZE":"64","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723104322"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28358,"ID":28359,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723104322"},{"NAME":"Screenshot from 2017-07-17 17-51-38.png","USER_NAME":"李开","FILE_ID":28354,"ID":28355,"FILE_SIZE":"191154","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723103805"},{"NAME":"Screenshot from 2017-07-14 14.26.07.png","USER_NAME":"李开","FILE_ID":28350,"ID":28351,"FILE_SIZE":"3582","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723103656"},{"NAME":"1e","USER_NAME":"李开","FILE_ID":28346,"ID":28347,"FILE_SIZE":"2060","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723103509"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28344,"ID":28345,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102650"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28342,"ID":28343,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102510"},{"NAME":"fileauth (1).txt","USER_NAME":"李开","FILE_ID":28340,"ID":28341,"FILE_SIZE":"64","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102509"},{"NAME":"Screenshot from 2017-07-17 17-51-38.png","USER_NAME":"李开","FILE_ID":28338,"ID":28339,"FILE_SIZE":"191154","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102451"},{"NAME":"router-demo_wisewrong.zip","USER_NAME":"李开","FILE_ID":28336,"ID":28337,"FILE_SIZE":"22383","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102451"},{"NAME":"2 (1) (1).png","USER_NAME":"李开","FILE_ID":28334,"ID":28335,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102300"},{"NAME":"2 (1) (2).png","USER_NAME":"李开","FILE_ID":28332,"ID":28333,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102211"},{"NAME":"router-demo_wisewrong.zip","USER_NAME":"李开","FILE_ID":28328,"ID":28329,"FILE_SIZE":"22383","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102159"},{"NAME":"Screenshot from 2017-07-20 21-49-17.png","USER_NAME":"李开","FILE_ID":28330,"ID":28331,"FILE_SIZE":"131084","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102159"},{"NAME":"2 (1).png","USER_NAME":"李开","FILE_ID":28326,"ID":28327,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723102032"},{"NAME":"2 (1).png","USER_NAME":"李开","FILE_ID":28324,"ID":28325,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723101937"},{"NAME":"CloudMusic_official_4.0.2_182112.apk","USER_NAME":"李开","FILE_ID":28320,"ID":28321,"FILE_SIZE":"31185473","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723095943"},{"NAME":"2 (1) (2).png","USER_NAME":"李开","FILE_ID":28318,"ID":28319,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723095830"},{"NAME":"router-demo_wisewrong.zip","USER_NAME":"李开","FILE_ID":28316,"ID":28317,"FILE_SIZE":"22383","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723095136"},{"NAME":"2 (1) (2).png","USER_NAME":"李开","FILE_ID":28314,"ID":28315,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723094359"},{"NAME":"2 (1).png","USER_NAME":"李开","FILE_ID":28312,"ID":28313,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723094158"},{"NAME":"6d9960899e510fb34d4fbfd8db33c895d0430cfb.gif","USER_NAME":"李开","FILE_ID":28306,"ID":28307,"FILE_SIZE":"2603961","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723093039"},{"NAME":"router-demo_wisewrong.zip","USER_NAME":"李开","FILE_ID":28304,"ID":28305,"FILE_SIZE":"22383","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723090732"},{"NAME":"2 (1) (1).png","USER_NAME":"李开","FILE_ID":28302,"ID":28303,"FILE_SIZE":"1636","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723090651"},{"NAME":"hosts","USER_NAME":"李开","FILE_ID":28294,"ID":28295,"FILE_SIZE":"173972","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723000841"},{"NAME":"hosts","USER_NAME":"李开","FILE_ID":28292,"ID":28293,"FILE_SIZE":"173972","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170723000036"},{"NAME":"test.img","USER_NAME":"李开","FILE_ID":28288,"ID":28289,"FILE_SIZE":"671088640","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170722154826"},{"NAME":"shaa1","USER_NAME":"李开","FILE_ID":28240,"ID":28241,"FILE_SIZE":"48309754","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170721073755"},{"NAME":"q","USER_NAME":"李开","FILE_ID":28229,"ID":28230,"FILE_SIZE":"4194304","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170720191359"},{"NAME":"test","USER_NAME":"李开","FILE_ID":28205,"ID":28206,"FILE_SIZE":"4194304","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170720191216"},{"NAME":"test","USER_NAME":"李开","FILE_ID":28203,"ID":28204,"FILE_SIZE":"4194304","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170720191207"},{"NAME":"test","USER_NAME":"李开","FILE_ID":28199,"ID":28200,"FILE_SIZE":"4194304","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170720191150"},{"NAME":"test","USER_NAME":"李开","FILE_ID":28197,"ID":28198,"FILE_SIZE":"4194304","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170720191105"},{"NAME":"10.flv","USER_NAME":"李开","FILE_ID":28195,"ID":28196,"FILE_SIZE":"2019452","PARENT_ID":null,"TYPE":2,"INPUT_DATE":"20170720185901"}],"limitSizeUpload":50}')
      // tmp.filelist
      for (var i in tmp.filelist) {
        var arrtmp = (tmp.filelist[i].NAME).split('.')
        console.log(arrtmp[arrtmp.length - 1])
        switch (arrtmp[arrtmp.length - 1]) {
          case 'jpg' || 'png' || 'bmp' || 'jpeg' || 'txt':
            console.log('PNG!')
            break
          case 'rmvb':
            break
          default:
            break
        }
      }
      // this.list = tmp.filelist
    }
  }
}
</script>
