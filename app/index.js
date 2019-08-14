import Vue from 'vue/dist/vue';
import Example from './Example.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: (createElement) => {
      return createElement(Example)
    }
  });
});