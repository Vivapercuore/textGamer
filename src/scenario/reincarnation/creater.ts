
const creater = [
    {
        groupName: '种族',
        type: "radio",
        values: [
            {
                name: "龙", //显示名称
                info: "长翅膀的大蜥蜴", //提示信息
                cost: 1,//花费
                flagAdd: ["龙裔"], //增加的标签
                flagDelete: [], //删除标签,
                attrSet: {//设置属性
                    力量: 10
                },
                attrAdd: { //增加属性
                    精神力: 5
                },
                attrReduce: {//减少属性

                }
            },
            {
                name: "狗头人", //显示名称
                info: "据说有巨龙血统", //提示信息
                cost: 1,//花费
                flagAdd: ["龙裔"], //增加的标签
                flagDelete: [], //删除标签,
                attrSet: {//设置属性

                },
                attrAdd: { //增加属性

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

                },
                attrAdd: { //增加属性

                },
                attrReduce: {//减少属性

                }
            },
        ]
    }
]


export default creater