import Vue from 'vue/dist/vue';
import './style.scss';
import Books from './Books.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: (createElement) => {
      return createElement(Books)
    }
  });
});