import { createStore } from "vuex"

export default createStore({
    state() {
        return {
            designeList: [
                {title: "Ostrov", code: 105, url: '', img: "src/assets/Design_Preview_1.png" },
                {title: "Flora", code: 104, url: '', img: "src/assets/Design_Preview_2.png" },
                {title: "SunWear", code: 103, url: '', img: "src/assets/Design_Preview_3.png" },
                {title: "Flora", code: 105, url: '', img: "src/assets/Design_Preview_1.png" },
                {title: "SunWear", code: 103, url: '', img: "src/assets/Design_Preview_3.png" },
            ] 
        }
    },
    getters: {
        DESIGNELIST(state) {
            return state.designeList
        }
    }
})