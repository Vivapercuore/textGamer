
import _ from "lodash";

import scenario from "src/scenario/index";
import core from "src/game/index";

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
                    const scenarioName = rootState.scenario.scenarioName //|| "reincarnation"
                    const currentScenario = scenario[scenarioName];
                    //是否是一个结局
                    const end = core.event.findEnd(currentScenario.ends, gotoPlace)
                    //是结局
                    if (!_.isEmpty(end)) {
                        dispatch("endGame", end)
                        resolve(end)
                    } else {
                        //查找事件链
                        const event = core.event.findEvent(currentScenario.events, gotoPlace)
                        resolve(event)
                    }
                } else {
                    resolve()
                }
            })
        },
        getNewEvent({ commit, dispatch, rootState }) {
            return new Promise(async (resolve, reject) => {
                //FIXME: test data
                const scenarioName = rootState.scenario.scenarioName //|| "reincarnation"
                const historyActions = rootState.game.historyActions //|| "reincarnation"
                if (!scenarioName) {
                    console.log("no scenario")
                    reject("no scenario")
                    return
                }
                const currentScenario = scenario[scenarioName];
                //返回关联的事件链
                const chain = await dispatch("eventChain")
                if (!_.isEmpty(chain)) {
                    resolve(chain)
                } else {
                    //给个新事件
                    const newEvent = core.event.getNewEvent(currentScenario.events, historyActions)
                    // 如果没有事件了
                    if (!_.isEmpty(newEvent)) {
                        resolve(newEvent)
                    } else {
                        const { attr, flags } = rootState.player
                        //进入结局
                        const end = core.event.getEnd(currentScenario.ends, attr, flags)
                        dispatch("endGame", end)
                        resolve(end)
                    }
                }
            })
        }
    },
    modules: {
    }
}

export default store