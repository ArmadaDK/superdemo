<!-- <template>
    <div class="wrap">
      <video class="video" muted autoplay controls ref="player"></video>
    </div>
  </template>
  
  <script>
  import flvjs from 'flv.js' // 引入flvjs
  export default {
    data () {
      return {
        player: null
      }
    },
    mounted () {
      // 如果浏览器支持flvjs，则执行相应的程序
      if (flvjs.isSupported()) {
        // 准备监控设备流地址
        const url = 'rtsp://zephyr.rtsp.stream/movie?streamKey=fc222446861ddef37e2beff065c87ce4'
        // 创建一个flvjs实例
        // 下面的ws://localhost:8888换成你搭建的websocket服务地址，后面加上设备流地址
        this.player = flvjs.createPlayer({
          type: 'flv',
          isLive: true,
          url: `ws://localhost:8100/rtsp?url=${window.btoa(url)}`
        },{
              enableStashBuffer: false, // 是否启用IO暂存缓冲区： 使用直播功能时，设置false可减少延迟，并减少网络不稳定时出现画面停顿的情况。
              fixAudioTimestampGap: false, // 检测到音视频不同步时，是否填充无声音频：
              isLive: true /// 是否为直播流：
          })
  this.player.on('error', (e) => {
          console.log(e)
        })
        
       // 将实例挂载到video元素上面
        this.player.attachMediaElement(this.$refs.player)
        
        try {
          // 开始运行加载 只要流地址正常 就可以在h5页面中播放出画面了
          this.player.load()
          this.player.play().then(() => {
               this.loading = false  // 加载成功
           })
  
        } catch (error) {
          console.log(error)
        }  
      }
    },
    beforeDestroy () {
      // 页面销毁前 关闭flvjs
      this.player.destroy()
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .wrap{
      .video {
        width: 300px;
        height: 300px;
      }
    }
  </style> -->


  <template>
    <div>
      <img :src="imageUrl" alt="Image">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        socket: null,
        imageUrl: ''
      };
    },
    mounted() {
      this.socket = new WebSocket('ws://localhost:9800');
  
      this.socket.onopen = () => {
        console.log('WebSocket connected');
      };
  
      this.socket.onmessage = (event) => {
        console.log(event.data);
        // 接收到消息时的处理逻辑
        const imageBlob = event.data;
        this.imageUrl = URL.createObjectURL(imageBlob);
      };
  
      this.socket.onclose = () => {
        console.log('WebSocket disconnected');
      };
    },
    beforeDestroy() {
      this.socket.close();
    }
  };
  </script>
  