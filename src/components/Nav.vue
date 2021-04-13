<template>
    <nav>
      <router-link to="/statistics" class="item" >
        <Icon name="statistic" />
        统计
      </router-link> 
      <router-link to="/record" class="item">
        <Icon name="money" />
        记账
      </router-link> 
      <router-link to="/userInfo" class="item">
        <Icon name="user" />
        我的
       </router-link>
    </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  padding: 5px 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  >.item {
    padding: 0 12px;
    display: flex;
    width: 33.33333%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.router-link-active {
        color: rgb(30, 232, 183);
    }
  }
  
}
</style>