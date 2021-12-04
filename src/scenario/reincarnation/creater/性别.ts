import { RadioCreaterItem } from '../../types/interface'

const setting: RadioCreaterItem =
{
    groupName: '性别',
    type: "radio",
    values: [
        {
            name: "无性", //显示名称
            info: "没有那种世俗的欲望", //提示信息
            cost: 1,//花费
            flagAdd: ["无性"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性
            },
            attrAdd: { //增加属性
                精神: 10
            },
            attrReduce: {//减少属性

            }
        },
        {
            name: "男", //显示名称
            info: "男孩子一般会强壮一点吧", //提示信息
            cost: 1,//花费
            flagAdd: ["男"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性

            },
            attrAdd: { //增加属性
                力量: 2
            },
            attrReduce: {//减少属性
            }
        },
        {
            name: "女", //显示名称
            info: "软软香香的女孩子", //提示信息
            cost: 1,//花费
            flagAdd: ["女"], //增加的标签
            flagDelete: [], //删除标签,
            attrSet: {//设置属性

            },
            attrAdd: { //增加属性
                魅力: 3
            },
            attrReduce: {//减少属性
                力量: 1
            }
        },
    ]
}

export default setting