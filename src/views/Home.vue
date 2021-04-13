<template>
  <div class="home">
    home

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
  </div>

  
</template>

<script lang="ts">
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>
