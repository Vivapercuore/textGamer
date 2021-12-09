
import { Operator } from 'src/game/judge/interface'

const events = {
    eventPackName: "人生",
    events: [
        {
            name: "平平无奇的生活", //名称,其他事件会通过这个名称跳转过来
            text: "平安无事的度过了一年", //出现的时候显示的文字
            options: [
                {
                    label: "新年快乐",
                    // choosenText: "平安无事的度过了一年", //没有的话会显示上面那个text
                    goto: [], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: "牙牙学语", //名称,其他事件会通过这个名称跳转过来
            text: "牙牙学语", //出现的时候显示的文字
            showif: {
                operator: Operator.等于,
                A: 1,
                B: 2,
            },
            options: [
                {
                    label: "新年快乐",
                    // choosenText: "平安无事的度过了一年", //没有的话会显示上面那个text
                    goto: [], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
    ]
}

export default events