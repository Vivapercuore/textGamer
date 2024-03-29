
const events = {
    eventPackName: "人生",
    events: [
        {
            name: "房价涨了", //名称,其他事件会通过这个名称跳转过来
            text: "大街小巷都在流传,今年的房价又涨了", //出现的时候显示的文字
            options: [
                {
                    label: "涨不涨咱都买不起啊",
                    choosenText: "真是操蛋", //没有的话会显示上面那个text
                    goto: [], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: "关我屁事",
                    // choosenText: "平安无事的度过了一年", //没有的话会显示上面那个text
                    goto: [], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: "赶紧上车",
                    // choosenText: "平安无事的度过了一年", //没有的话会显示上面那个text
                    goto: [], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
    ]
}

export default events