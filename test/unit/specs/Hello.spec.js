import Vue from 'vue'
import home from '@/components/home'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js PWA')
  })
})
