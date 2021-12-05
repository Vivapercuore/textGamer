
import scenario from "src/scenario/index";


const store = {
    state: () => ({ //数据
        scenarioName: ''
    }),
    // getters: {
    //     currentScenario: state => {
    //         return { ...scenario[state.scenarioName] }
    //     }
    // },
    mutations: { //信号
        changeScenario(state, scenarioName) {
            //TODO:检查是否存在
            state.scenarioName = scenarioName
        }
    },
    actions: { //动作
        changeScenario({ commit, dispatch }, scenarioName: string) {
            if (!scenarioName) {
                return;
            }
            commit('changeScenario', scenarioName)
            const currentScenario = scenario[scenarioName];
            //设为基础属性
            dispatch('setPlayerData', currentScenario.baseAttr)
        },
    }
}

export default store