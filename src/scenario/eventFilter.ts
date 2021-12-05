


export function getNewEvent(events, showEvents) {
    const flatenEvents = getAllEvnets(events)
    // console.log({
    //     events, showEvents
    // })
    //过滤已经生效过的事件

    //过滤显示条件

    //如果没有任何事件显示过,尝试显示默认值
    if (showEvents.length === 0) {
        const defaultEvent = flatenEvents.find(event => event.name === "default")
        if (defaultEvent) {
            return defaultEvent
        }
    }
    //返回一个随机值

    //如果没有符合的
    return []
}


function getAllEvnets(events) {
    const flatEvents = [];
    events.forEach((obj) => {
        if (obj.name) {
            flatEvents.push(obj)
        }
        if (obj.eventPackName && obj.event) {
            flatEvents.push(...obj.event)
        }
    })
    return flatEvents
}