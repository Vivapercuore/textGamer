import { createStore } from 'vuex'

import scenario from './scenario'
import player from './player'
import game from './game'

import packageJson from '../../package.json'



const store = createStore({
    state: {//数据
        version: packageJson.version
    },
    mutations: {//信号
        setSelectAddress(state, payload) {
            state.selectAddress = payload
        }
    },
    actions: {//动作
    },
    modules: {//模块
        scenario,
        player,
        game,
    }
});



export default store