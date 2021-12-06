

/**
 * @param ends 剧本包含的结局
 * @param name 搜索的结局名称
 * @returns 符合的结局 可能为空
 */
export function findEnd(ends, name) {
    const flatenEnds = []
    //取出指定值 ->  //取出所有子项
    if (name) {
        const appointEnd = ends.find(ends => ends.name === name)
        if (appointEnd) {
            return appointEnd
        }
    }

    //过滤符合条件的结局

    return {}
}

/**
 * @param ends 剧本包含的结局
 * @param attr 角色属性
 * @param flags 角色
 * @returns 符合的结局 可能为空
 */
export function getEnd(ends, attr, flags) {

    // console.log(ends, attr, flags)
    const flatenEnds = []
    flatenEnds.push(...ends)
    //展开所有子项

    //返回一个随机值
    // const randomIndex = _.random(0, end.length - 1);
    // const gotoEnd = end[randomIndex]
    // return gotoEnd

    //如果没有任何符合的项,尝试显示默认值
    const defaultEvent = flatenEnds.find(event => event.name === "default")
    if (defaultEvent) {
        return defaultEvent
    }
    return {}
}