import { RadioCreaterItem, RadioTypes } from '../../types/interface'

const setting: Array<RadioCreaterItem> = [
    getSetting(`力量`),
    getSetting(`敏捷`),
    getSetting(`体质`),
    getSetting(`智力`),
    getSetting(`感知`),
    getSetting(`魅力`),
]

function getSetting(name: string): RadioCreaterItem {
    const creater = {
        require: false, //是否必需
        groupName: `${name}调整`,
        type: RadioTypes.单选器,
        values: [
            {
                name: "苟一手", //显示名称
                cost: -1,//花费
                attrReduce: { //增加属性
                    [`${name}`]: 1
                },
            },
            {
                name: "不调整", //显示名称
                cost: 0,//花费
            },
            {
                name: "小幅强化", //显示名称
                cost: 1,//花费
                flagAdd: [], //增加的标签
                flagDelete: [], //删除标签,
                attrSet: {//设置属性
                },
                attrAdd: { //增加属性
                    [`${name}`]: 1
                },
                attrReduce: {//减少属性
                }
            },
            {
                name: "中幅强化", //显示名称
                cost: 2,//花费
                flagAdd: [], //增加的标签
                flagDelete: [], //删除标签,
                attrSet: {//设置属性
                },
                attrAdd: { //增加属性
                    [`${name}`]: 2
                },
                attrReduce: {//减少属性
                }
            },
            {
                name: "大幅强化", //显示名称
                cost: 4,//花费
                flagAdd: [], //增加的标签
                flagDelete: [], //删除标签,
                attrSet: {//设置属性
                },
                attrAdd: { //增加属性
                    [`${name}`]: 3
                },
                attrReduce: {//减少属性
                }
            },
            {
                name: "极限强化", //显示名称
                cost: 7,//花费
                flagAdd: [], //增加的标签
                flagDelete: [], //删除标签,
                attrSet: {//设置属性
                },
                attrAdd: { //增加属性
                    [`${name}`]: 4
                },
                attrReduce: {//减少属性
                }
            },
        ]
    }
    return creater
}

export default setting