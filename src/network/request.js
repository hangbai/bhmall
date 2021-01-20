import axios from 'axios'

export function request(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL:'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    });

    instance.interceptors.request.use(config=>{
      return config
    },error => {
      return error
    })

    instance.interceptors.response.use(response=>{
      return response.data
    },error => {
      console.log('来到了response拦截failure中');
      console.log(error);
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误'
            break
          case 401:
            error.message = '未授权的访问'
            break
        }
      }
      return error
    })

    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
