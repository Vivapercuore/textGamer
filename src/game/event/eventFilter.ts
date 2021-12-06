

import _ from "lodash";


import judge from "src/game/judge/index";

export function getNewEvent(events, showEvents) {
    let flatenEvents = getAllEvnets(events)
    //过滤已经生效过的事件
    // remove函数 返回的数组是 return true  的 项 参数里数组留下的是 return false的项
    _.remove(flatenEvents, function (event) {
        //找到了就返回找到的值,没找到返回undefined(false)
        return _.find(showEvents, { name: event.name });
    });
    //过滤显示条件
    flatenEvents = _.filter(flatenEvents, (event) => {
        //没有校验选项,不过滤
        if (_.isEmpty(event.showif)) {
            return true
        } else {
            return judge(event.showif)
        }
    })

    //如果没有任何事件显示过,尝试显示默认值
    if (showEvents.length === 0) {
        const defaultEvent = flatenEvents.find(event => event.name === "default")
        if (defaultEvent) {
            return defaultEvent
        }
    }
    //返回一个随机值
    if (flatenEvents?.length > 0) {
        const randomIndex = _.random(0, flatenEvents.length - 1);
        const randomEvent = flatenEvents[randomIndex]
        return randomEvent
    }

    //如果没有符合的
    return {}
}


function getAllEvnets(events) {
    const flatEvents = [];
    events.forEach((obj) => {
        if (obj.name) {
            flatEvents.push(obj)
        }
        if (obj.eventPackName && obj.events) {
            flatEvents.push(...obj.events)
        }
    })
    return flatEvents
}