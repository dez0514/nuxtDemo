<template>
    <div class="container">
        <!--文章详情-->
        <h1>{{desc && desc.title}}</h1>
        <div class="intro">作者：{{desc && desc.author}} 发表时间：{{desc && desc.date}}</div>
        <div class="detail-con" v-html="desc && desc.content"></div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            list: [
                {id:0,title:'dez老帅了',author: 'dez',date:'2018/8/27',content:'陈珍，哈哈哈哈哈哈，比心'},
                {id:1,title:'老帅了',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'},
                {id:2,title:'hahah',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'},
                {id:3,title:'真棒',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'},
                {id:4,title:'五月天',author: 'dez',date:'2018/8/28',content:'哈哈哈哈哈哈'}
            ],
            desc: null
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.list.forEach(item => {
                if(item.id === Number(this.id)) {
                    this.desc = item
                }
            })
            console.log('desc:',this.desc)
        })
    }
}
</script>
<style lang="scss" scoped>
h1,.intro {
    text-align: center;
    margin-bottom: 15px;
}
.detail-con {
    text-indent: 40px;
}
</style>




