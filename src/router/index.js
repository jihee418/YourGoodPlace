import Vue from 'vue'
import Router from 'vue-router'

//주석의 webpackChunkName = 코드스플릿 chunk Name으로 새용됨
const Main = () => import(/* webpackChunkName: "Main" */ '../view/home')
const Product = () => import(/* webpackChunkName: "Product" */ '../view/Product/Product')
const ProductStorefarm = () => import(/* webpackChunkName: "ProductStorefarm" */ '../view/Product/Storefarm')
const JiheeMain = () => import('../view/Jihee/JiheeMain')

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
        {
            path: '/jihee/main',
            name: 'JiheeMain',
            component: JiheeMain
        }
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
