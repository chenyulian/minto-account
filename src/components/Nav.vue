<template>
    <nav>
      <router-link to="/statistics" class="item">
        <Icon name="statistic" />统计
      </router-link> |
      <router-link to="/" class="item">
      <Icon name="home" />主页
      </router-link> |
      <router-link to="/userInfo" class="item">
      <Icon name="user" /> 我的</router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
nav {
  border:1px solid black;
  padding: 30px;
  display: flex;
  flex-direction: row;

  >.item {
    padding: 0 12px;
  }
  
}
</style>