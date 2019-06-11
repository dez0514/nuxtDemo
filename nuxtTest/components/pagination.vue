<template>
  <div class="pageaction" style="text-align: center; margin: 20px 0;">
    <el-pagination
      background
      v-show="hasPaging"
      :layout="layout"
      :page-size="pageSize"
      v-on:current-change="currentChange"
      :total="total"
      :current-page="currentPage">
    </el-pagination>
  </div>
</template>

<script>
  export default{
    props : ['pagerCount', 'total','pageSize', 'currentPage', 'page-change'],
    data(){
      return{
        layout: ''
      }
    },
    watch: {
      
    },
    methods : {
      currentChange : function(index){
        this.$emit("page-change",index);
      },
      layouts: function() {
        // 判断 pc 还是 移动端
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        if(flag) {
          this.layout = 'prev, next'
        } else {
          this.layout = 'prev, pager, next'
        }
      }
    },
    mounted(){
      this.layouts()
    },
    computed : {

      hasPaging: function(){
        return this.total / this.pageSize  > 1
      }
    }
  }
</script>