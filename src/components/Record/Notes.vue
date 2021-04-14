<template>
    <label class="notes">
        <span class="name">备注：</span> 
        <input type="text" placeholder="请输入备注"/>
    </label>
</template>

<script lang="ts">
    import { Component } from "vue-property-decorator";
    import Vue from "vue";

    @Component
    export default class Notes extends Vue{
        
    }
</script>

<style lang="scss" scoped>
    .notes {
        display: flex;
        align-items: center;
        color: rgba(30, 232, 183);
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