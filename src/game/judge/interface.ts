
export enum Operator {
    //运算
    加 = "加",
    减 = "减",
    乘 = "乘",
    除 = "除",
    //比较
    大于 = "大于",
    小于 = "小于",
    等于 = "等于",
    //逻辑
    且 = "且",
    或 = "或",
    非 = "非",
    //集合
    全部 = "全部",
    任意 = "任意",
    包含 = "包含",
    不含 = "不含",
}

export interface JudgeObject {
    operator: Operator
    A: string | number | JudgeObject
    B?: string | number | JudgeObject
}

