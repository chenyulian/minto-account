<template>
    <label class="notes">
        <span class="name">备注：</span> 
        <input type="text" placeholder="请输入备注"
            v-model="notes" />
    </label>
</template>

<script lang="ts">
    import { Component } from "vue-property-decorator";
    import Vue from "vue";

    @Component
    export default class Notes extends Vue{
        notes = "";
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/common.scss";
    .notes {
        display: flex;
        align-items: center;
        color: $color-highlight;
        > .name {
            padding-left: 20px;
            padding-right: 10px;
        }
        > input {
            height: 64px;
            flex-grow: 1;
            border: none;
        }
    }
</style>