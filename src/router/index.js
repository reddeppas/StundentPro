import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import interphy from '@/components/interphy'
import intermaths from '@/components/intermaths'
import Auth from '@okta/okta-vue'
import Vue from 'vue'

Vue.use(Auth, {
  issuer: 'https://dev-608913.okta.com/oauth2/default',
  client_id: '0oab7ipqlymqpcD5n4x6',
  redirect_uri: 'http://xpertdevops.com:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/interphy',
      name: 'interphy',
      component: interphy,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/intermaths',
      name: 'intermaths',
      component: intermaths,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
