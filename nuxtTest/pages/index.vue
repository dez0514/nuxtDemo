<template>
  <section class="container">
    <div class="content">
      <h1 class="title">简单文章增删改查系统</h1>
      <div class="links">
        <a href="/edit" class="button green">发表文章</a>
        <a href="/news/list/1" class="button gray">查看文章</a>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  components: {
   
  }
}
</script>

<style lang="scss" scoped>
.content {
  overflow: hidden;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.title {
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  display: flex;
  padding-top: 1px;
  text-align: center;
  justify-content: center;
  .button {
    display: inline-block;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px 30px;
    &.green {
      border: 1px solid #3b8070;
      color: #3b8070;
    }
    &.green:hover {
      background: #3b8070;
      color: #fff;
    }
    &.gray {
      margin-left: 10px;
      border: 1px solid #35495e;
      color: #35495e;
    }
    &.gray:hover {
      background: #35495e;
      color: #fff;
    }
  }
}
</style>

