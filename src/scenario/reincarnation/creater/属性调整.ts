import { RadioCreaterItem } from '../../types/interface'

const setting: RadioCreaterItem =
{
    groupName: '属性调整',
    type: "数据调整",
    values:
        [
            {
                min: 0, //显示名称
                max: 999, //提示信息
                attrName: "力量",
                cost: 1, //每点属性花费
                maxModify: 5,//最多增减点数
            },
            {
                min: 0, //显示名称
                max: 999, //提示信息
                attrName: "敏捷",
                cost: 1, //每点属性花费
                maxModify: 5,//最多增减点数
            },
            {
                min: 0, //显示名称
                max: 999, //提示信息
                attrName: "智力",
                cost: 1, //每点属性花费
                maxModify: 5,//最多增减点数
            },
            {
                min: 0, //显示名称
                max: 999, //提示信息
                attrName: "财富",
                cost: 1, //每点属性花费
                maxModify: 5,//最多增减点数
            },
            {
                min: 0, //显示名称
                max: 999, //提示信息
                attrName: "精神",
                cost: 1, //每点属性花费
                maxModify: 5,//最多增减点数
            },
            {
                min: 0, //显示名称
                max: 999, //提示信息
                attrName: "魅力",
                cost: 1, //每点属性花费
                maxModify: 5,//最多增减点数
            },
        ],
}
export default setting