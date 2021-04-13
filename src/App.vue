<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">flv单视频播放</router-link>
            <br />
            <router-link to="/flv-batch-video">flv多视频播放</router-link>
            <br />
            <router-link to="/ez-open-video">萤石云UIKit单视频播放</router-link>
            <br />
            <router-link to="/eeee">萤石云UIKit多视频播放</router-link>
            <br />
        </div>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>
<style>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    #nav {
        float: left;
        padding: 30px;
        width: 300px;
        height: calc(100% - 60px);
        border-right: 1px solid #808080;
    }

        #nav a {
            font-weight: bold;
            color: #2c3e50;
            margin-top: 20px;
        }

            #nav a.router-link-exact-active {
                color: #42b983;
            }

    #content {
        padding: 30px;
        float: left;
        width: calc(100% - 300px - 61px - 60px);
        height: calc(100% - 60px);
    }
</style>
