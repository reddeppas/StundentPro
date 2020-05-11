import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  getPosts () {
    return this.execute('get', '/cks')
  },
  getPost (id) {
    return this.execute('get', `/cks/${id}`)
  },
  createPost (data) {
    return this.execute('post', '/cks', data)
  },
  updatePost (id, data) {
    return this.execute('put', `/cks/${id}`, data)
  },
  deletePost (id) {
    return this.execute('delete', `/cks/${id}`)
  }
}
