import { createStore } from 'vuex'

const store = createStore({
    state: {
        selectAddress: null
    },
    mutations: {
        setSelectAddress(state, payload) {
            state.selectAddress = payload
        }
    },
    actions: {
    },
    modules: {
    }
});


const moduleB = {
    state: () => ({ //数据
        scenarioName: ''
    }),
    mutations: { //信号
        changeScenario(scenarioName) {
            state.scenarioName = scenarioName
        }
    },
    actions: { //动作
        changeScenario({ commit }, scenarioName) {
            commit('changeScenario', scenarioName)
        }
    }
}

export default store