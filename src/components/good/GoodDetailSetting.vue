<template>
  <div style="margin-bottom: 20px;">
    <Edit></Edit>
  </div>
  <div>
    <el-container class="content-row">
      <el-button type="primary" plain @click="submit">提交</el-button>
      <el-button type="danger" plain style="margin-left: 40px;" @click="cancel">取消</el-button>
    </el-container>
</div>
</template>

<script>
import Edit from './Edit.vue'
export default {
  components: {
    Edit
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