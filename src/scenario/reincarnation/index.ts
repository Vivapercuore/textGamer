

import { scenarioType } from '../types/interface'

import baseAttr from './基础属性'
import properties from './properties'
import creater from './creater/index'
import events from './events/index'
import ends from './ends/index'

const reincarnation: scenarioType = {
    name: "异界转生",
    info: "因为刚开始做,所以,你肯定只能胎死腹中的,别挣扎了,作者压根没做其他结局",
    baseAttr,
    creater,
    properties,
    events,
    ends,
}


export default reincarnation