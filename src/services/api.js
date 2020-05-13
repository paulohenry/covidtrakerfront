import {create} from 'apisauce'

const api = create({
  baseURL:'http://34.66.76.49:3389'
})

api.addAsyncResponseTransform(response=>{
  if(!response.ok) throw response;
})

export default api;