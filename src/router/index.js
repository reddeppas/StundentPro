import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import interphy from '@/components/interphy'
import intermaths from '@/components/intermaths'
import Auth from '@okta/okta-vue'
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.use(Auth, {
  issuer: 'https://dev-608913.okta.com/oauth2/default',
  client_id: '0oab7ipqlymqpcD5n4x6',
  redirect_uri: 'http://xpertdevops.com:8080/implicit/callback',
  scope: 'openid profile email'
})
Vue.use(vueVimeoPlayer)
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/cks',
      name: 'cks',
      component: cks,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cicd',
      name: 'cicd',
      component: cicd,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/devops',
      name: 'devops',
      component: devops,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
