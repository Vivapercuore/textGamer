import { RadioCreaterItem } from '../../types/interface'

const setting: RadioCreaterItem =
{
    groupName: '特性',
    type: "多选器",
    values: [
        {
            name: "出身贵族", //显示名称
            info: "至少不是跪族", //提示信息
            cost: 4,//花费
            flagAdd: ["贵族"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
            },
            attrAdd: { //增加属性
                财富: 5,
                魅力: 3
            },
            attrReduce: {//减少属性
                力量: 1
            }
        },
        {
            name: "扶她", //显示名称
            info: "测试特性", //提示信息
            cost: -1,//花费
            flagAdd: ["扶她"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
            },
            attrAdd: { //增加属性
                精神: 10
            },
            attrReduce: {//减少属性
                魅力: 1
            }
        },
        {
            name: "男同", //显示名称
            info: "测试特性", //提示信息
            cost: -1,//花费
            flagAdd: ["男同"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
            },
            attrAdd: { //增加属性
                精神: 10
            },
            attrReduce: {//减少属性
                魅力: 1
            }
        },
    ]
}

export default setting