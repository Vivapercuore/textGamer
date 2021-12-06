

import { Operator, JudgeObject } from './interface'

import { operation } from './operation'

/**
 * @param obj 输入判断对象,返回结果
 */
const judge = function (obj: JudgeObject): boolean {
    return operation(obj)
}

export default judge