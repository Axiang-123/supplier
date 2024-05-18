import axios from 'axios'
import { ElLoading } from 'element-plus'
// import store from '@/store/index'


//配置全局数据请求类型
axios.defaults.headers['Content-Type'] = "application/json;charset=utf-8";

//自定义实例
const service = axios.create({
    baseURL: "",				//数据请求地址
    timeout: 30 * 1000
})

//配置加载参数
let loadingOption = {
    text: "正在努力加载中...",
    background: "rgba(0, 0, 0, .5)"
};
let loading = {
    close: () => { }
}

//请求拦截器
service.interceptors.request.use(config => {
    //开始加载
    loading = ElLoading.service(loadingOption);
    //数据转换
    config.data = 'object' === typeof config.data ? JSON.stringify(config.data) : config.data;
    //追加访问令牌
    // config.headers['authtoken'] = store.getters.authtoken;
    return config;
}, error => {
    loading.close();
    return Promise.reject(error);
});

//响应拦截器
service.interceptors.response.use(response => {
    loading.close();
    if (response.status == 200) {
        return response['data'];
    }
    return Promise.reject(response);
}, error => {
    loading.close();
    return Promise.reject(error);
});

export default service;