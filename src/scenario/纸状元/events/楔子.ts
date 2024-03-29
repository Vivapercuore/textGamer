
import { Operator } from 'src/game/judge/interface'

const events = {
    eventPackName: `楔子`,
    events: [
        {
            name: `楔子1`, //名称,其他事件会通过这个名称跳转过来
            text: `通济渠的水流到这里，就窄了。`, //出现的时候显示的文字
            options: [
                {
                    label: `是么?`,
                    // choosenText: `平安无事的度过了一年`, //没有的话会显示上面那个text
                    goto: [`楔子2`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子2`, //名称,其他事件会通过这个名称跳转过来
            text: `“娘子是哪里人，竟不知早已经改称为汴河了吗？”南来北往，蓑衣翁撑了一辈子的船，此时却不大能听出船上客的口音。`, //出现的时候显示的文字
            options: [
                {
                    label: `“有人喜新，自然也有人恋旧。”`,
                    choosenText: `赵轻桥略侧过身，回望来时路。但帷帽遮眼，她已望不见渡口送行人。`, //没有的话会显示上面那个text
                    goto: [`楔子3`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子3`, //名称,其他事件会通过这个名称跳转过来
            text: `“那位郎君的作派，看起来不像是负心人。”`, //出现的时候显示的文字
            options: [
                {
                    label: `“是啊，”`,
                    choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子4`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: `“他是个心怀天地的侠客，他不会负任何人。”`,
                    choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子4`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子4`, //名称,其他事件会通过这个名称跳转过来
            text: `乌篷小船悠悠拐过九曲池的最后一个弯儿，水面骤然见阔。隔着青纱也能望见远处高楼迭起，灯火燃夜。`, //出现的时候显示的文字
            options: [
                {
                    label: `扬州城里是没有宵禁的。`,
                    // choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子5`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子5`, //名称,其他事件会通过这个名称跳转过来
            text: `“夜市游湖，要靠岸走才好哩。”艄公嘴上是这样说的，船也正是这样走的——齐岸并行，有风吹来也不会歪。`, //出现的时候显示的文字
            options: [
                {
                    label: `“岸上有什么？”`,
                    // choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子6`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子6`, //名称,其他事件会通过这个名称跳转过来
            text: `“那可多！蒲桃酒，乳酿鱼，水晶糕......对了，娘子可曾去过长安？”`, //出现的时候显示的文字
            options: [
                {
                    label: `“不曾。”`,
                    choosenText: `赵轻桥摇头道`, //没有的话会显示上面那个text
                    goto: [`楔子7`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: `“去过。”`,
                    choosenText: `赵轻桥点头道`, //没有的话会显示上面那个text
                    goto: [`楔子7-2`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子7`, //名称,其他事件会通过这个名称跳转过来
            text: `“听说长安东市有一家专卖毕罗的铺子，尤其樱桃作馅儿时，烤完也是红溜溜的，丝毫不变色。这一门漂亮的手艺，被张家儿子花大价钱求到了，前两天刚从京城回来。娘子既无缘去长安，不妨在咱们扬州城里尝个新鲜。”`, //出现的时候显示的文字
            options: [
                {
                    label: `“哦？”`,
                    choosenText: `赵轻桥笑问道,“老人家，您可曾尝过这口新鲜？”`, //没有的话会显示上面那个text
                    goto: [`楔子8`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: `“老人家，您可曾尝过这口新鲜？”`,
                    choosenText: `“哦？”,赵轻桥笑问道`, //没有的话会显示上面那个text
                    goto: [`楔子8`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子7-2`, //名称,其他事件会通过这个名称跳转过来
            text: `“听说长安东市有一家专卖毕罗的铺子，尤其樱桃作馅儿时，烤完也是红溜溜的，丝毫不变色。这一门漂亮的手艺，被张家儿子花大价钱求到了，前两天刚从京城回来。娘子不妨在咱们扬州城里尝个新鲜。”`, //出现的时候显示的文字
            options: [
                {
                    label: `“哦？”`,
                    choosenText: `赵轻桥笑问道,“老人家，您可曾尝过这口新鲜？”`, //没有的话会显示上面那个text
                    goto: [`楔子8`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: `“老人家，您可曾尝过这口新鲜？”`,
                    choosenText: `“哦？”,赵轻桥笑问道`, //没有的话会显示上面那个text
                    goto: [`楔子8`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子8`, //名称,其他事件会通过这个名称跳转过来
            text: `艄公闻言哈哈一声：“我这把年纪还在撑船，风里雨里赚来的钱怎能用来尝鲜呢。”`, //出现的时候显示的文字
            options: [
                {
                    label: `倒也有不花钱就能尝到的新鲜`,
                    // choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子9`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: `大概是没有吧`,
                    // choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子9`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子9`, //名称,其他事件会通过这个名称跳转过来
            text: `“这是云韶府的入门曲子，大凡要选乐工进宫时，必先练会这一首。已称不上新鲜啦！”艄公摆着桨。`, //出现的时候显示的文字
            options: [
                {
                    label: `船行半刻，人声逐渐鼎沸。`,
                    // choosenText: `赵轻桥微微笑道`, //没有的话会显示上面那个text
                    goto: [`楔子10`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子10`, //名称,其他事件会通过这个名称跳转过来
            text: `从远处观来只是一片通明的灯火，临近细看，竟是高低错落，喧中有雅。
            汀兰郁郁，一台画舫漂泊其中，当属最雅。
            离画舫愈近，连水波也添上几分轻佻。歌乐传得断断续续，词里唱的似乎是......`, //出现的时候显示的文字
            options: [
                {
                    label: `“四方无事太平年”`,
                    choosenText: `边关战事频生，先皇驾崩月余，何来四方无事、歌舞升平之说？`, //没有的话会显示上面那个text
                    goto: [`楔子11`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子11`, //名称,其他事件会通过这个名称跳转过来
            text: `艄公说：“先皇走了，还有新皇。”。`, //出现的时候显示的文字
            options: [
                {
                    label: `“新皇未满十岁。”`,
                    choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子12`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子12`, //名称,其他事件会通过这个名称跳转过来
            text: `艄公笑道：“十岁的皇帝难道就不听歌？”他腾出手指着岸边，“娘子且看，七八岁的女娃已经在学唱了。”`, //出现的时候显示的文字
            options: [
                {
                    label: `往那边看去`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子13`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子13`, //名称,其他事件会通过这个名称跳转过来
            text: `搭开帽帘，看见一个小姑娘孤身扶在桥边，稚音絮絮。于是请船家暂停岸边，自行向小姑娘走近。`, //出现的时候显示的文字
            options: [
                {
                    label: `“这么晚了，小孩子在外面会有危险，姐姐送你回家吧？”`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子14`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子14`, //名称,其他事件会通过这个名称跳转过来
            text: `小姑娘抿着嘴角退了几步，上下打量眼前人的衣着，“我在学唱歌，待会儿自己能回去。”她的衣衫肥而短，纤细的手腕露在袖口外。`, //出现的时候显示的文字
            options: [
                {
                    label: `“可你看起来正在饿肚子。”`,
                    choosenText: `赵轻桥从包袱里拿出个胡饼，掰成两半，自己啃了一口，另一半递给了小姑娘。`, //没有的话会显示上面那个text
                    goto: [`楔子15`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子15`, //名称,其他事件会通过这个名称跳转过来
            text: `小姑娘犹疑地咽了下口水，还是接了过去，“......谢谢娘子。好人一生平安。”分出来的胡饼堪比她半边脸大，然而小姑娘三口并作两口地就吃完了，一点儿也不怕噎着。`, //出现的时候显示的文字
            options: [
                {
                    label: `帮她擦干净嘴角`,
                    choosenText: `赵轻桥伸手帮她擦干净嘴角的饼屑`, //没有的话会显示上面那个text
                    goto: [`楔子16`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子16`, //名称,其他事件会通过这个名称跳转过来
            text: `“很喜欢唱歌吗？晚饭也不记得回家吃。”`, //出现的时候显示的文字
            options: [
                {
                    label: `...`,
                    choosenText: `小姑娘垂下头，似乎在考虑怎么说。明明还是个孩子，本该童言无忌的。
                    赵轻桥摸摸她的头，打算问她家在哪儿`, //没有的话会显示上面那个text
                    goto: [`楔子17`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子17`, //名称,其他事件会通过这个名称跳转过来
            text: `小姑娘先开了口：“我......我不喜欢唱歌。”`, //出现的时候显示的文字
            options: [
                {
                    label: `...`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子18`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子18`, //名称,其他事件会通过这个名称跳转过来
            text: `“家里也没有晚饭。”`, //出现的时候显示的文字
            options: [
                {
                    label: `...`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子19`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子19`, //名称,其他事件会通过这个名称跳转过来
            text: `“钱家三叔公寄来的信里说，我爹在北边打仗死了。阿娘听秀才哥念完信，哭倒在床上起不来了。”`, //出现的时候显示的文字
            options: [
                {
                    label: `...`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子20`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子20`, //名称,其他事件会通过这个名称跳转过来
            text: `“酒店，食店，旅店，都不愿收我做工。织绣坊师傅的原话是：若想当学徒，便只管吃住，赚工钱得等学成后再论。”
            她说完这句，忍不住呜呜地哭道
            “可娘娘还躺在床上呢，家里剩的钱只够买两帖药。我，我不能等！”`, //出现的时候显示的文字
            options: [
                {
                    label: `...`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`楔子21`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子21`, //名称,其他事件会通过这个名称跳转过来
            text: `“大家都说，女孩子的去处，只有卖身当奴婢。如果能卖到那条大船上，去给皇帝当奴婢，至少能凑多些钱给我娘吃药治病。”`, //出现的时候显示的文字
            options: [
                {
                    label: `闹市依旧嘈杂`,
                    choosenText: `丝竹依旧缠绵`, //没有的话会显示上面那个text
                    goto: [`楔子22`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
                {
                    label: `丝竹依旧缠绵`,
                    choosenText: `闹市依旧嘈杂`, //没有的话会显示上面那个text
                    goto: [`楔子22`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
        {
            name: `楔子22`, //名称,其他事件会通过这个名称跳转过来
            text: `夜，更深了。
            秋风哀凉，徐徐如叹息。
            这叹息声中有艄公的，有小姑娘的，或许还有画舫上的。但没有赵轻桥的，因为她正在发呆。
            她呆呆地想，想了一会儿。倏地，她想到了。
            赵轻桥牵起小姑娘的手，说：`, //出现的时候显示的文字
            options: [
                {
                    label: `“我收你做工，我送你回家。”`,
                    // choosenText: `赵轻桥说`, //没有的话会显示上面那个text
                    goto: [`待续未完-楔子-上`], //另一个事件的 name 列表,随机显示其中一个,如果没有,就会随机选择下一个符合的事件,用于事件链
                },
            ]
        },
    ]
}

export default events