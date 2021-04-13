<template>
    <div style="height:100%;width:100%;">
        <div style="height:60px;width:100%;">
            <button v-on:click="playVideo">播放视频</button>
            <button v-on:click="killVideo">销毁视频</button>
        </div>
        <div style="height:30px;">
            <label>视频地址：</label>
            <input style="width:800px;height:28px;" :value="flvUrl" />
        </div>
        <div style="margin-top:20px; height:calc(100% - 60px - 30px - 20px);width:100%;border:1px solid #068f1e;">
            <video ref="eleVideo" style="width: 100%;height:100%;"></video>
        </div>
    </div>
</template>
<script>
    import flvjs from "flv.js"

    export default {
        name: "FlvVideo",
        data() {
            return {
                flvUrl: "http://117.160.157.90:8073/yxl_3/live.flv?sign=4100731932000-696d2c9f683c5ba2f973604372403884",
                player: undefined
            }
        },
        mounted() {

        },
        methods: {
            playVideo() {
                let videoContainer = this.$refs["eleVideo"];
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    isLive: true,
                    lazyLoad: false,
                    autoCleanupSourceBuffer: true,
                    url: this.flvUrl
                });

                flvPlayer.attachMediaElement(videoContainer);
                flvPlayer.load();
                flvPlayer.play();
                this.player = flvPlayer;
            },
            killVideo() {
                if (this.player) {
                    //player._transmuxer._controller.stop();
                    player.unload();    //调用它的unload方法才能达到既暂停又停止拉流。
                    player.destroy();
                    console.log("destroyed");
                }
                this.player = undefined;
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