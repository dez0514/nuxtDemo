<template>
    <div class="container">
        <h1>文章列表</h1>
        <div class="list">
            <ul class="list-ul">
                <li v-for="(item,index) in list" :key="index">
                    <nuxt-link :to="`/news/${item.id}`">{{item.title}}</nuxt-link>
                    <span class="caozuo">
                        <el-button size="mini" type="primary" @click="goDetail(item.id)">查看</el-button>
                        <el-button size="mini" type="success" @click="editFn(item.id)">修改</el-button>
                        <el-button size="mini" type="danger" @click="deletFn(item.id)">删除</el-button>
                    </span>
                </li>
            </ul>
            <mypage v-on:page-change="onPageChange" :pageSize="pageSize" :total="records" :currentPage="currentPage"></mypage>
        </div>
    </div>
</template>
<script>
import $http from '../../../action/http'
import mypage from '../../../components/pagination.vue'
export default {
    data() {
        return {
            list: [],
            records: 15, // 总数据条数
            pageSize: 2, // 每页条数
            currentPage: Number(this.$route.params.id) // 当前页
        }
    },
    computed: {

    },
    components: {
        mypage
    },
    methods: {
        // 去查看
        goDetail(id) {
          this.$router.push(`/news/${id}`)
        },
        // 编辑
        editFn(id) {
          this.$router.push(`/edit/${id}`)
        },
        // 删除
        deletFn(id) {
            // 删除接口
            console.log(`删除${id}`)
        },
        onPageChange(e) {
            console.log(1,e)
            this.$router.push(`/news/list/${e}`)
        },
        getlist(){
            $http.get('/api/article',{}).then(data => {
                console.log(555,data)
                this.list = data
            }).catch(err => {
                console.log(666,err)
            })
        }
    },
    mounted() {
        this.getlist()
    }
}
</script>
<style lang="scss" scoped>
.list-ul {
    overflow: hidden;
}
li {
    overflow: hidden;
    padding: 6px 0;
    border-bottom: 1px solid #f7f7f7;
    line-height: 29px;
  &:hover {
     background: #f7f7f7;
   }
}
.caozuo{
  float: right;
  a{
    margin-left: 20px;
    font-size: 12px;
    color: #666;
  }
  button{
    margin-left: 20px;
    font-size: 12px;
    color: #fff;
  }
}
</style>