

import { scenarioType } from '../types/interface'

import baseAttr from './基础属性'
import properties from './properties'
import creater from './creater/index'
// import events from './events/index'
// import ends from './ends/index'

const reincarnation: scenarioType = {
    name: "肉鸽",
    info: "创建和记录肉鸽人物卡",
    startBtnLable: "开始受苦",
    baseAttr,
    creater,
    properties,
    // events,
    // ends,
}


export default reincarnation