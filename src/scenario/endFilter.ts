


export function findEnd(ends, name) {
    const flatenEnds = []
    //取出指定值 ->  //取出所有子项
    if (name) {
        const appointEnd = ends.find(ends => ends.name === name)
        if (appointEnd) {
            return [appointEnd]
        }
    }

    //过滤符合条件的结局


    //如果没有任何事件显示过,尝试显示默认值
    if (flatenEnds.length === 0 && !name) {
        const defaultEvent = flatenEnds.find(event => event.name === "default")
        if (defaultEvent) {
            return defaultEvent
        }
    }
    //返回一个随机值

    //如果没有符合的
    return []
}

