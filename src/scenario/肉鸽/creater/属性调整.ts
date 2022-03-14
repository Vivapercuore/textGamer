import { RadioCreaterItem, RadioTypes } from '../../types/interface'

const setting: RadioCreaterItem =
{
    require: false, //是否必需
    groupName: `${name}调整`,
    type: RadioTypes.数据调整,
    values: [
        getSetting(`力量`),
        getSetting(`敏捷`),
        getSetting(`体质`),
        getSetting(`智力`),
        getSetting(`感知`),
        getSetting(`魅力`),
    ]
}

function getSetting(name: string) {
    const creater =
    {
        min: -1, //最小
        max: 4, //最高
        attrName: `${name}`,
        costSet: [{
            num: -1, //数额
            cost: -1, //花费
        }, {
            num: 0, //数额
            cost: 0, //花费
        }, {
            num: 1, //数额
            cost: 1, //花费
        }, {
            num: 2, //数额
            cost: 2, //花费
        }, {
            num: 3, //数额
            cost: 4, //花费
        }, {
            num: 4, //数额
            cost: 7, //花费
        }]
    }
    return creater
}

export default setting