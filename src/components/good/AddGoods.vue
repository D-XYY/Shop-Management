<template>
  <div class="content-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基础设置" name="1">
        <GoodBaseSetting></GoodBaseSetting>
      </el-tab-pane>
      <el-tab-pane label="价格库存" name="2">
        <GoodPriceSettingVue></GoodPriceSettingVue>
      </el-tab-pane>
      <el-tab-pane label="商品详情" name="3">
        <GoodDetailSettingVue></GoodDetailSettingVue>
      </el-tab-pane>
    </el-tabs>
</div>
</template>
<script>
import GoodBaseSetting from './GoodBaseSetting.vue';
import GoodDetailSettingVue from './GoodDetailSetting.vue';
import GoodPriceSettingVue from './GoodPriceSetting.vue';
export default {
  data() {
    return {
      activeName: '1'
    }
  },
  components: {
    GoodBaseSetting,
    GoodDetailSettingVue,
    GoodPriceSettingVue
  }
}
</script>