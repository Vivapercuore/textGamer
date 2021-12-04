
import _ from "lodash";


const store = {
    state: () => ({ //数据
        flags: [],
        attr: {}
    }),
    // getters: {
    //     currentScenario: state => {
    //         return scenario[state.scenarioName]
    //     }
    // },
    mutations: { //信号
        setPlayerData(state, data) {
            _.assign(state, data)
        }
    },
    actions: { //动作
        setPlayerData({ commit, dispatch }, data) {
            commit('setPlayerData', data)
        },
    },
    modules: {
    }
}

export default store