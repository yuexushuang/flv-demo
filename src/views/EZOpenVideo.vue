<template>
    <div style="height:100%;width:100%;">
        <div style="height:60px;width:100%;">
            <button v-on:click="playVideo">播放视频</button>
            <button v-on:click="stopVideo">结束播放</button>
            <button @click="destroyVideo">销毁视频</button>
        </div>
        <div style="height:80px;">
            <label>视频地址：</label>
            <input style="width:800px;height:28px;" v-model="videoUrl" />
            <br />
            <label>accessToken：</label>
            <input style="width:800px;height:28px;" v-model="accessToken" />
        </div>
        <div id="my-ezvideo-container" style="margin-top:20px; height:calc(100% - 80px - 60px - 20px);width:100%;border:1px solid #068f1e;">

        </div>
    </div>
</template>
<script>
    import EZUIKit from 'ezuikit-js';

    export default {
        name: "EZOpenVideo",
        data() {
            return {
                videoUrl: "ezopen://open.ys7.com/203751922/1.live",
                accessToken: "at.3bvmj4ycamlgdwgw1ig1jruma0wpohl6-48zifyb39c-13t5am6-yukyi86mz",
                player: undefined
            }
        },
        mounted() {

        },
        methods: {
            playVideo() {
                if (this.player) {
                    //this.player.play();
                    player.play({
                        url: this.videoUrl
                    });
                } else {
                    var player = new EZUIKit.EZUIKitPlayer({
                        id: 'my-ezvideo-container',
                        accessToken: this.accessToken,
                        url: this.videoUrl,
                    })
                    this.player = player;
                }
            },
            stopVideo() {
                //stop方法会停止取流
                //但是页面上还是会有视频播放组件
                if (this.player) {
                    this.player.stop();
                }
            },
            destroyVideo() {
                if (this.player) {
                    this.player.stop();
                    let videoContainer = document.getElementById('my-ezvideo-container');
                    videoContainer.innerText = "";      //使用innerText清空页面上的视频播放组件，innerHtml是不行的哦
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

    #my-ezvideo-container {
        /*视频播放时会把窗口撑大，出现滚动条*/
        overflow: hidden !important;
    }
</style>