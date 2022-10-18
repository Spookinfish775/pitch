
export default function ({ store, app: { router, $axios } }) {
  $axios.setBaseURL("https://dev.api.cloud-atlas.online");

  $axios.onRequest((config) => {
    if (store.state.authorization) {
      config.headers.authorization = `${store.state.authorization}`
      config.headers.account = '8b59a775077536f3b73bb774655b94f6'
    }
    return config
  })

  $axios.onError((error) => {
    if (error.response.status === 404) {
      router.push("/error/404");
    }
    
    return Promise.reject(error);
  });
}