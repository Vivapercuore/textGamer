
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
}

export interface JudgeObject {
    operator: Operator
    A: string | number | JudgeObject | FlagJudgeObject
    B?: string | number | JudgeObject | FlagJudgeObject
}

export enum FlagOperator {
    //逻辑
    不含 = "不含",
    全部 = "全部",
    包含 = "包含",
}

export interface FlagJudgeObject {
    operator: FlagOperator
    flags: string[]
}
