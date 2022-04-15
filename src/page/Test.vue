<script setup lang="ts">
import _ from "lodash";
import { ref, reactive, computed } from "vue";
import router from "src/router";

// defineProps<{ msg: string  }>()

const wuxingjuese = '女帝 亚瑟 亚历克斯 乱世枭雄 项楚 萨拉德 兵家至圣 汉尼巴尔 穆英 假面将军 白秦起 天命观星 奥克塔维 兵仙 里奥尼德 尤里乌斯 武圣 贾斯汀尼 菲利浦 弗德里希 卧龙夫人 龙胆神将 虞夫人 秦玉京 厄迪拉 琼恩 影武者 艳后 亨利 康斯坦丁 魏兰 博迪卡 达里厄斯 铁卫迟 安德莉亚'.split(' ')
const sixingjuese = '李道玄 崔如意 武威 巴尔达斯 哪儿西斯 阿克塞尔 雷欧 袁夏'.split(' ')

const wuxingjineng = `沉默誓言 孤注一掷 狂怒血脉 胜利军规 敏锐洞察 胜利的代价 侵蚀之焰 波澜攻势 怒火猛攻 风卷残云 毁灭的预示 三重攻势 军神赠礼 破敌之眼 反戈一击 灵光乍现 避芒击惰 王者之剑 弱点进攻 英勇时刻 决意强袭 压迫之袭 天地无双斩 正义裁决 恩泽庇护 光明护佑 战术冲锋 冲锋的极意 致命一击 慈悲终结 饥渴之刃 百战之体 以战养战 燎天之火 泰山压顶 胜利怒吼 蛮勇侵袭`.split(' ')
const sixingjineng = `火球轰击 巨石冲击 攻城大师 进裂 命运操弄 战争祝福 名门之后 连击 丰收祝福 怒不可遏 钢铁之躯破怒斩 战争狂热 怒涛之击 撕裂 持久战 惩戒者 文武双全 反击 剑盾突击 震慑猛击 不屈信念 明心静气 列阵御敌 冲冠一怒`.split(' ')
const sanxingjineng = `冲击 休整 奇袭 二连斩 攻城战术 锐锋`.split(' ')




enum gailv {
  wuxing = 0.0678,
  sixing = 0.36,
  sanxing = 0.5722,
}

//6.78
const wuxing = wuxingjuese.concat(wuxingjineng).map(item => ({
  name: item,
  star: `★`.repeat(5),
  starnum: 5,
  count: 1,
  class: `wuxing`
}))
//36
const sixing = sixingjuese.concat(sixingjineng).map(item => ({
  name: item,
  star: `★`.repeat(4),
  starnum: 4,
  count: 1,
  class: `sixing`
}))
//57.22
const sanxing = sanxingjineng.map(item => ({
  name: item,
  star: `★`.repeat(3),
  starnum: 3,
  count: 1,
  class: `sanxing`
}))

//抽卡结果
let resList: any = reactive(
  []
);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const showList = computed(() => {
  const show = {};
  const temp = _.cloneDeep(resList)
  for (let index = 0; index < temp.length; index++) {
    const name = temp[index].name;
    if (!show[name]) {
      show[name] = temp[index]
    } else {
      // console.log(name,show[name].count)
      show[name].count += 1;
    }
  }
  const showedList = Object.values(show)
  showedList.sort((a, b) => (b.starnum - a.starnum))
  // console.log({showedList})
  return showedList;
});

const get = async (times: number) => {
  if (((resList.length + 1) % 25 === 0) && isLess25()) {
    await less25()
  } else if (((resList.length + 1) % 5 === 0) && isLess5()) {
    console.log(((resList.length + 1) % 5 === 0), isLess5())
    await less5()
  } else {
    await getOneCard()
  }
  times--
  if (times > 0) {
    get(times)
  }
}

//普通抽卡
const getOneCard = async () => {
  const now = Math.random()
  let card
  if (now < gailv.wuxing) {
    card = _.cloneDeep(wuxing[Math.floor(Math.random() * wuxing.length)])
  } else if (now < gailv.sixing) {
    card = _.cloneDeep(sixing[Math.floor(Math.random() * sixing.length)])
  } else {
    card = _.cloneDeep(sanxing[Math.floor(Math.random() * sanxing.length)])
  }
  // console.log("card",card,now)
  resList.push(card)

  ElMessage({
    type: {
      3: "info",
      4: "warning",
      5: "success",
    }[card.starnum],
    message: `抽到-[${card.starnum}]星卡:${card.name}`
  });

  await sleep(200)
}
//5张保底
const less5 = async () => {
  const now = Math.random()
  let card
  if (now < gailv.wuxing / (gailv.wuxing + gailv.sixing)) {
    card = _.cloneDeep(wuxing[Math.floor(Math.random() * wuxing.length)])
  } else {
    card = _.cloneDeep(sixing[Math.floor(Math.random() * sixing.length)])
  }
  card.desc = `(小保底)`
  // console.log("card5",card)
  resList.push(card)
}
//25张保底
const less25 = () => {
  let card
  card = _.cloneDeep(wuxing[Math.floor(Math.random() * wuxing.length)])
  card.desc = `(大保底)`
  // console.log("card25",card)
  resList.push(card)
}

const isLess5 = () => {
  console.log("isLess5", !_.takeRight(resList, 5).find(item => item.starnum > 3))
  return !_.takeRight(resList, 5).find(item => item.starnum > 3)
}

const isLess25 = async () => {
  return !_.takeRight(resList, 25).find(item => item.starnum > 4)
}

/***清空 */
const reset = async () => {
  resList.splice(0, resList.length);
}

const targetCard = ref({})
const targetNub = ref(0)

const getTarget = async () => {
  while (!targetDone()) {
    await getOneCard()
  }
}

const targetDone = function (): boolean {
  let card = targetCard.value
  let nub = targetNub.value
  return resList.filter(item => item.name == card).length >= nub
}

</script>

<template>
  <el-container class="page hw">
    <el-header> 抽卡模拟器(随手做的) </el-header>
    <el-alert title="只是随手做的,根据官方公示的概率和大致的猜测,仅供娱乐,和实际并不一致,只做了一个卡池,传奇现世" type="warning">
    </el-alert>
    <el-alert title="按照公布的概率,假设了每张卡的概率相等,且没有锁卡等恶心机制.但是实际上有没有呢,我也不知道.自行分辨吧" type="error">
    </el-alert>
    <el-alert title="按照官方公布的概率,并假设所有同星级出货概率相同." type="warning">
    </el-alert>
    <el-alert title="因为保底策略让你抽中的,会标识(保底)." type="warning">
    </el-alert>
    <a href="https://dg.qq.com/webplat/info/news_version3/58876/58877/m22333/202109/900062.shtml">官方标的概率</a>
    <el-main>
      <el-row :gutter="20">
        <el-button @click="get(1)">抽</el-button>
        <el-button @click="get(5)">5连抽</el-button>
        <el-button @click="reset">清空重来</el-button>
      </el-row>
      <el-row :gutter="20">
        <el-card> 抽到 <el-select v-model="targetCard" placeholder="请选择">
            <el-option v-for="item in wuxing" :key="item.name" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
          <el-input-number v-model="targetNub" :min="1" :max="10" label="抽多少停?"></el-input-number> 张- 为止
        </el-card>
        <el-button @click="getTarget">开整</el-button>
      </el-row>
      <el-row :gutter="20" v-show="resList.length > 0">
        <el-card> 你已经抽了 {{ resList.length }} 次了, 花了{{ resList.length * 198 }}银币 ,{{
          (resList.length * 19.8).toFixed(2)
        }}块钱打了水漂 </el-card>
      </el-row>
      <h1>抽到的卡:</h1>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card v-for="(res, index) in showList" :key="index">
            <el-descriptions :class="res.class" :title="`${res.name}  * ${res.count}`">
              <el-descriptions-item :class="res.class" label="星级：">
                {{
                  res.star
                }}
              </el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
      </el-row>
      <h1>抽卡记录:</h1>
      <el-row :gutter="5">
        <el-col :span="24">
          <el-card v-for="(res, index) in resList" :key="index" class="resListItem">
            <span :class="res.class"> {{ res.name }} {{ res.desc || '' }}</span>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <PageFoot />
    </el-footer>
  </el-container>
</template>

<style lang="less" scoped>
@import (reference) "src/theme/theme.less";

.page {
  min-height: 100vh;

  background-color: @pagebackground;
}

.el-descriptions__body {
  background-color: transparent;
}

.wuxing {
  color: #e7b00e;
}

.sixing {
  color: #8529dc;
}

.sanxing {
  color: #1e6fff;
}

.resListItem {
  display: inline-block;
}
</style>
