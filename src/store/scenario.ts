import scenario from "src/scenario/index";

const store = {
    state: () => ({ //数据
        scenarioName: ''
    }),
    getters: {
        currentScenario: state => {
            return scenario[state.scenarioName]
        }
    },
    mutations: { //信号
        changeScenario(state, scenarioName) {
            console.log("mutations changeScenario", scenarioName);
            //TODO:检查是否存在
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