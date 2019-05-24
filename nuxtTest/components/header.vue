<template>
    <header>
       <h1>NUXT.JS 文章发布系统</h1>
       <div class="login-wrap">
           <nuxt-link to="/login" v-if="!islogin" class="login btn">登录</nuxt-link>
           <span class="username" v-if="islogin"> {{userName}} 欢迎您!</span>
           <span v-if="islogin" class="logout btn" @click="logout">退出</span>
       </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            islogin: true,
            userName: 'dez'
        }
    },
    methods: {
        logout() {
            console.log('logout退出')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
header {
   background: #f0f0f0;
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 25px;
    h1{
      margin-bottom: 0;
      display: inline-block;
      color: #409EFF;
    }
    .login-wrap {
        float: right;
        span, a {
            padding-left: 10px;
            font-size: 14px;
            color: #666;
            &.btn{
                color: #999;
                cursor: pointer;
            }
        }
    }
}
</style>

