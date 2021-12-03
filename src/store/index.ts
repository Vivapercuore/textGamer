import { createStore } from 'vuex'

import scenario from './scenario'



const store = createStore({
    state: {//数据
        selectAddress: null
    },
    mutations: {//信号
        setSelectAddress(state, payload) {
            state.selectAddress = payload
        }
    },
    actions: {//动作
    },
    modules: {//模块
        scenario
    }
});



export default store