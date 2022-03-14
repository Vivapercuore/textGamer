
import { RadioCreaterItem, TextCreaterItem } from '../../types/interface'
import 姓名 from './姓名'
// import 种族 from './种族'
// import 性别 from './性别'
// import 阵营 from './阵营'
import 属性调整 from './属性调整'
// import 特性 from './特性'

const creater: Array<RadioCreaterItem | TextCreaterItem> = [
    姓名,
    // 种族,
    // 性别,
    // 阵营,
    ...属性调整,
    // 特性,
]


export default creater