
import _ from "lodash";

import scenario from "src/scenario/index";
import { getNewEvent } from "src/scenario/eventFilter";
import { findEnd } from "src/scenario/endFilter";

const store = {
    state: () => ({ //数据
        end: {},
        historyActions: [],
    }),
    // getters: {
    //     currentScenario: state => {
    //         return scenario[state.scenarioName]
    //     }
    // },
    mutations: { //信号
        newActionHistory(state, data) {
            state.historyActions.push(data)
        },
        //游戏开始,数据复位
        startGame(state) {
            state.end = {}
            state.historyActions = []
        },
        endGame(state, end) {
            state.end = end
        }
    },
    actions: { //动作
        newActionHistory({ commit, dispatch }, data) {
            commit('newActionHistory', data)
        },
        startGame({ commit }) {
            commit('startGame')
        },
        endGame({ commit, dispatch, rootState }, end) {
            commit('endGame', end)
        },
        eventChain({ commit, dispatch, rootState }) {
            return new Promise(async (resolve, reject) => {
                let gotoPlace

                const lastHistory = _.last(rootState.game.historyActions)
                //获取最后一条记录
                if (lastHistory) {
                    const { choosen, options } = lastHistory;
                    //获取选项
                    const choosenOption = options.find((option) => option.label === choosen);

                    //有指定去处
                    if (choosenOption?.goto?.length > 0) {
                        //随机获取一个去处
                        const randomIndex = _.random(0, choosenOption.goto.length - 1);
                        gotoPlace = choosenOption.goto[randomIndex]
                    }
                }
                //是否有去处
                if (gotoPlace) {
                    //FIXME: test data
                    const scenarioName = rootState.scenario.scenarioName || "reincarnation"
                    const currentScenario = scenario[scenarioName];
                    //是否是一个结局
                    const end = findEnd(currentScenario.ends, gotoPlace)
                    //是结局
                    if (end?.length > 0) {
                        const randomIndex = _.random(0, end.length - 1);
                        const gotoEnd = end[randomIndex]
                        dispatch("endGame", gotoEnd)
                        resolve(gotoEnd)
                    } else {
                        //查找事件链
                        resolve()
                    }
                } else {
                    resolve()
                }
            })
        },
        getNewEvent({ commit, dispatch, rootState }) {
            return new Promise(async (resolve, reject) => {
                //FIXME: test data
                const scenarioName = rootState.scenario.scenarioName || "reincarnation"
                const historyActions = rootState.game.historyActions || "reincarnation"
                if (!scenarioName) {
                    reject("no scenario")
                }
                const currentScenario = scenario[scenarioName];
                //返回关联的事件链
                const chain = await dispatch("eventChain")
                if (chain) {
                    resolve(chain)
                } else {
                    //给个新事件
                    const newEvent = getNewEvent(currentScenario.events, historyActions)
                    resolve(newEvent)
                }
            })
        }
    },
    modules: {
    }
}

export default store