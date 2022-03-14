import { RadioCreaterItem } from '../../types/interface'

const setting: RadioCreaterItem =
{
    require: true, //是否必需
    groupName: '种族',
    type: "单选器",
    values: [
        {
            name: "龙", //显示名称
            info: "长翅膀的大蜥蜴", //提示信息
            cost: 8,//花费
            flagAdd: ["龙裔"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
                种族: "龙"
            },
            attrAdd: { //增加属性
                力量: 10
            },
            attrReduce: {//减少属性

            },
        },
        {
            name: "狗头人", //显示名称
            info: "据说有巨龙血统", //提示信息
            cost: 1,//花费
            flagAdd: ["龙裔"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
                种族: "狗头人"
            },
            attrAdd: { //增加属性,
                精神: 5,
            },
            attrReduce: {//减少属性
                魅力: 3
            }
        },
        {
            name: "人类", //显示名称
            info: "狡诈的异乡人", //提示信息
            cost: 1,//花费
            flagAdd: [], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
                种族: "人类"
            },
            attrAdd: { //增加属性
                智力: 1
            },
            attrReduce: {//减少属性

            }
        },
    ]
}

export default setting