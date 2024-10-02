import { createStore } from "vuex";

export default createStore({
    state: {
        dark: localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : false,
        showMenu: false
    },
    mutations: {
        toggleDark (state) {
            state.dark = !state.dark
            localStorage.setItem('dark', state.dark)
        },
        toggleMenu (state, show = false) {
            state.showMenu = show
        }
    }
})