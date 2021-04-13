<template>
    <div style="height:100%;width:100%;">
        <div style="height:60px;width:100%;">
            <button v-on:click="playAllVideo">播放视频</button>
            <button v-on:click="killAllVideo">销毁视频</button>
        </div>
        <div style="height:calc(100% - 60px);width:100%;">
            <div v-for="(item,index) in videos" class="video">
                <video ref="multiVideo" style="width: 100%;height:100%;"></video>
            </div>
        </div>
    </div>
</template>
<script>
    import flvjs from "flv.js"

    export default {
        name: "FlvVideoBatch",
        data() {
            return {
                videos: [
                    "https://flvopen.ys7.com:9188/openlive/1a0d37dd5bfa48ea928ea301b460e445.flv",
                    //"http://117.160.157.90:8073/yxl_3/live.flv?sign=4100731932000-696d2c9f683c5ba2f973604372403884",
                    //"http://117.160.157.90:8073/yxl_4/live.flv?sign=4100731932000-97090a965510900fffc25bbf2f07a9ea",
                    //"http://117.160.157.90:8073/yxl_5/live.flv?sign=4100731932000-d957c40ba7384ed9e27f52b9f832d4be",
                    //"http://117.160.157.90:8073/yxl_6/live.flv?sign=4100731932000-d98e1388f1cc232ae2ebb239a3f6d86d",
                    //"http://117.160.157.90:8073/yxl_2/live.flv?sign=4100731932000-90d38664f93ea5a0543f319e6cffed28",
                    //"http://117.160.157.90:8073/yxl_7/live.flv?sign=4100731932000-c9d191160807d7ab6c0567ebf1b64df0",
                    //"http://117.160.157.90:8073/yxl_1/live.flv?sign=4100731932000-4e5ed7ef5a9ef7ca9538c2536882aba1"
                ],
                players: []
            }
        },
        mounted() {

        },
        methods: {
            playAllVideo() {
                let videoContainers = this.$refs["multiVideo"];
                for (var i = 0; i < videoContainers.length; i++) {
                    var flvPlayer = flvjs.createPlayer({
                        type: 'flv',
                        isLive: true,
                        lazyLoad: false,
                        autoCleanupSourceBuffer: true,
                        url: this.videos[i]
                    });

                    flvPlayer.attachMediaElement(videoContainers[i]);
                    flvPlayer.load();
                    flvPlayer.play();
                    this.players.push(flvPlayer);
                }
            },
            killAllVideo() {
                for (var i = 0; i < this.players.length; i++) {
                    let player = this.players[i];
                    //player._transmuxer._controller.stop();
                    player.unload();    //调用它的unload方法才能达到既暂停又停止拉流。
                    player.destroy();
                    console.log("destroy" + i);
                }
                this.players = [];
            }
        }
    }
</script>
<style>
    button {
        margin-left: 20px;
    }

    .video {
        display: inline-block;
        height: 30%;
        width: 30%;
        border: #ff0000 1px solid;
        margin: 10px 10px;
    }
</style>