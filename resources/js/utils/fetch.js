import { Message } from 'element-ui'
import axios from 'axios'
import store from '@/store'


// create an axios instance
const fetch = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

fetch.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

fetch.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        /*
        if( error.response ) {
            if( error.response.status == 419 || error.response.status == 401) {
                Message({
                    message: error.response.data.msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                });
                store.dispatch('user/resetToken').then(() => {
                    //location.reload()
                    //router.push({path:'login'});
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
        */
    }
);

export default fetch