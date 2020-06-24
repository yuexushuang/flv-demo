import Vue from 'vue';
import VueRouter from 'vue-router';
import VideoPanel from '../views/VideoPanel.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'VideoPanel',
        component: VideoPanel
    }
];

const router = new VueRouter({
    routes
});

export default router;
