import Vue from 'vue';
import VueRouter from 'vue-router';
import FlvVideo from '../views/FlvVideo.vue';
import FlvVideoBatch from '../views/FlvVideoBatch.vue';
import EZOpenVideo from '../views/EZOpenVideo.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'FlvVideo',
        component: FlvVideo
    },
    {
        path: '/flv-batch-video',
        name: 'FlvVideoBatch',
        component: FlvVideoBatch
    },
    {
        path: '/ez-open-video',
        name: 'EZOpenVideo',
        component: EZOpenVideo
    },

];

const router = new VueRouter({
    routes
});

export default router;
