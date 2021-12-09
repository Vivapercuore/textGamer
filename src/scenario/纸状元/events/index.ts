
import 楔子 from './楔子'

const events = [
    {
        name: "default", //默认模板,初始或者没有关联项时可以用这个项目过度
        text: "楔子",
        options: [
            {
                label: "进入",
                choosenText: "楔子",
                goto: ["楔子1"], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
            },
        ]
    },
    楔子,
]


export default events