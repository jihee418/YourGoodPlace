import Vue from 'vue'
import Router from 'vue-router'

//주석의 webpackChunkName = 코드스플릿 chunk Name으로 새용됨
const Main = () => import(/* webpackChunkName: "view" */ '../view/home')
const Product = () => import(/* webpackChunkName: "view" */ '../view/Product/Product')
const ProductStorefarm = () => import(/* webpackChunkName: "view" */ '../view/Product/Storefarm')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        /* 메인화면 */
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/product/storefarm',
            name: 'ProductStorefarm',
            component: ProductStorefarm
        },
    ]
})

// router.beforeEach((to, from, next) => {
//
//     let testFunc = fnction(){
//         alert('test')
//     }
//
//     testFunc();
// });

export default router
