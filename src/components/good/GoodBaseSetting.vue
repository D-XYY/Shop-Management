<template>
  <div>
    <el-container class="content-row">
      <span class="input-tip">商品名称:</span>
      <div class="input-field">
        <el-input v-model="queryParam.name"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">商品简介:</span>
      <div class="input-field">
        <el-input v-model="queryParam.synopsis" type="textarea"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">商品封面:</span>
      <div>
        <el-upload :auto-upload="false" :limit="1" list-type="picture-card">
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">列表图片:</span>
      <div>
        <el-upload :auto-upload="false" :limit="5" list-type="picture-card">
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">上架时间:</span>
      <div class="input-field">
        <el-date-picker v-model="queryParam.date" type="daterange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" :size="size" />
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">商品分类:</span>
      <div class="input-field">
        <el-select v-model="queryParam.category" style="width: 240px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="input-field">
        <el-button type="primary" round>添加分类</el-button>
      </div>
    </el-container>
    <el-container class="content-row">
      <el-button type="primary" plain @click="submit">提交</el-button>
      <el-button type="danger" plain style="margin-left: 40px;" @click="cancel">取消</el-button>
    </el-container>
</div>
</template>

<script>
import { Plus } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

export default {
  data() {
    return {
      queryParam: {
        name: '',
        synopsis: '',
        date: '',
        category: ''
      },
      options: [
        {
          key: "0",
          label: "男装",
          value: "0"
        }, {
          key: "1",
          label: "女装",
          value: "1"
        }, {
          key: "1",
          label: "全部",
          value: "1"
        },
      ]
    }
  },
  components: {
    Plus
  },
  methods: {
    //提交
    submit() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    },
    //取消
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>