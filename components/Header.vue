<template>
  <div class="header">
    <div class="icon">GEOAI</div>
    <div class="content">
      <div class="first" v-for="(item,index) in titleList" :key="index">{{item.first}}</div>
    </div>
    <!-- <div class="btn">申请演示</div> -->
      <el-button>申请演示</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleList: [
        {
          first: '遥感设施',
          children: [
            {
              second: '智能基站',
              children: [
                {
                  third: 'G900固定式'
                },
                {
                  third: 'G600固定式'
                },
                {
                  third: 'S100固定式'
                },
                {
                  third: 'T50简易式'
                },
              ],
            },
            {
              second: '飞行平台',
              children: [
                {
                  third: '自研云巢'
                },
                {
                  third: '大疆M300'
                },
                {
                  third: '大疆御2'
                },
                {
                  third: '大疆P4R'
                },
                {
                  third: '道通EVO2'
                },
              ],
            },
            {
              second: '飞行大脑',
              children: [
                {
                  third: '云冠2.0',
                },
              ]
            },
            {
              second: '专业挂载',
              children: [
                {
                  third: '红外可见光'
                },
                {
                  third: '激光雷达1'
                },
                {
                  third: '多光谱'
                },
                {
                  third: '探照灯'
                },
                {
                  third: '喊话器'
                },
                {
                  third: '单线激光'
                },
                {
                  third: '微光相机'
                },
                {
                  third: '抛投器'
                },
                {
                  third: '频谱仪'
                },
                {
                  third: '超声波检测仪'
                },
              ],
            },
          ]
        },
        {
          first: '遥感平台',
          children: [
            {
              second: '易飞云时空大数据平台',
            },
            {
              second: '行业模块',
              children: [
                {
                  third: '自研云巢'
                },
                {
                  third: '大疆M300'
                },
                {
                  third: '大疆御2'
                },
                {
                  third: '大疆P4R'
                },
                {
                  third: '道通EVO2'
                },
              ],
            },
            {
              second: '分析算法',
              children: [
                {
                  third: '自研云巢'
                },
                {
                  third: '大疆M300'
                },
                {
                  third: '大疆御2'
                },
                {
                  third: '大疆P4R'
                },
                {
                  third: '道通EVO2'
                },
              ],
            },
          ]
        },
        {
          first: '遥感应用',
          children: [
            {
              second: '输电线路解决方案',
            },
            {
              second: '变电站解决方案',
            },
            {
              second: '水利解决方案',
            },
            {
              second: '林场解决方案',
            },
            {
              second: '工地解决方案',
            },
            {
              second: '城市网格化管理',
            },
          ]
        },
        {
          first: '遥感服务',
          children: [
            {
              second: '智能基站',
              children: [
                {
                  third: 'G900固定式'
                },
                {
                  third: 'G600固定式'
                },
                {
                  third: 'S100固定式'
                },
                {
                  third: 'T50简易式'
                },
              ],
            },
            {
              second: '飞行平台',
              children: [
                {
                  third: '自研云巢'
                },
                {
                  third: '大疆M300'
                },
                {
                  third: '大疆御2'
                },
                {
                  third: '大疆P4R'
                },
                {
                  third: '道通EVO2'
                },
              ],
            },
          ]
        },
        {
          first: '关于我们',
        },
      ],
    }
  },
  filters: {
    hours (date) {
      return date.split('T')[1].split('.')[0]
    }
  },
  computed: {
    visits () {
      return this.$store.state.visits.slice().reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {

}
</style>
