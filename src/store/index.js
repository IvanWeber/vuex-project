// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
    
// })
import { createStore } from "vuex"
import post from './modules/post'

const store = createStore({
    modules: {
        post
    }
})

export default store