

import ajax from './ajax'

// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
//这个接口的参数是在url路径中的，没有query参数
    export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
    export const reqFoodTypeList = () => ajax(BASE_URL+'/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
    export const reqShopList = ({latitude,longitude}) => ajax(BASE_URL+'/shops',{latitude,longitude})

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
    export const reqShopListByGeohashAndKeyword = (geohash,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})

// [5、获取一次性验证码](#5获取一次性验证码)<br/>
    export const reqCaptcha = () => ajax(BASE_URL+'/captcha')

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
    export const loginByName = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
    export const reqMessageCode = phone => ajax(BASE_URL+'/sendcode',{phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
    export const loginByPhone = (phone,code) => ajax(BASE_URL + '/login_sms',{phone, code}, 'POST')

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
    export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// [10、用户登出](#10用户登出)<br/>
    export const reqLogout = () => ajax(BASE_URL + '/logout')

//使用mockServer拦截获取mock数据，不需要代理
//请求商家食品的数据
    export const reqShopGoods = () => ajax('/goods')
//请求商家评价的数据
    export const reqShopRatings = () => ajax('/ratings')
//请求商家信息的数据
    export const reqShopInfo = () => ajax('/info')




// let a = function(geohash){
//     ajax(`${BASE_URL}/position/${geohash}`)
// }