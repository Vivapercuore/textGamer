

import { scenarioType } from '../types/interface'

import baseAttr from './基础属性'
import properties from './properties'
import creater from './creater/index'
import events from './events/index'
import ends from './ends/index'

const reincarnation: scenarioType = {
    name: "监狱和父亲",
    info: "你会如何选择呢",
    startBtnLable: "开始阅读",
    baseAttr,
    creater,
    properties,
    events,
    ends,
}


export default reincarnation