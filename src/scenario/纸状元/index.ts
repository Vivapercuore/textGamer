

import { scenarioType } from '../types/interface'

import baseAttr from './基础属性'
import properties from './properties'
import creater from './creater/index'
import events from './events/index'
import ends from './ends/index'

const reincarnation: scenarioType = {
    name: "纸状元",
    info: "交互式文本",
    startBtnLable: "开始阅读",
    baseAttr,
    creater,
    properties,
    events,
    ends,
}


export default reincarnation