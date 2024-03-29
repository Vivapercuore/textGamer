
import life from './life'
import 成长 from './成长'

const events = [
    {
        name: "default", //默认模板,初始或者没有关联项时可以用这个项目过度
        text: "准备好出生了么",
        options: [
            {
                label: "开始转生",
                choosenText: "你出生了",
                goto: [], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
            },
            {
                label: "我后悔了",
                choosenText: "胎死腹中",
                goto: ["胎死腹中"], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
            }
        ]
    },
    life,
    成长,
]


export default events