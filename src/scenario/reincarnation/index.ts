

import { scenarioType } from '../types/interface'

import baseAttr from './基础属性'
import properties from './properties'
import creater from './creater/index'
import events from './events/index'
import ends from './ends/index'

const reincarnation: scenarioType = {
    name: "异界转生",
    info: "感觉也没什么好讲的，看标题就行了",
    baseAttr,
    creater,
    properties,
    events,
    ends,
}


export default reincarnation