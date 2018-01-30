import Vue from 'vue'
import App from './App'

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
