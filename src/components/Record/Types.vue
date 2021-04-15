<template>
     <div class="type">
        <ul class="types">
            <li  class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Vue from 'vue';
    
    @Component
    export default class Types extends Vue{
        
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/common.scss";
    .types {
        font-family: $font-hei;
        color: white;
        display: flex;
        background: $color-highlight;;
        flex-direction: row;
        font-size: 24px;
        text-align: center;
        > li {
            display: flex;
            width: 50%;
            height: 64px;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after{
                position: absolute;
                content: '';
                width: 100%;
                height: 3px;
                background-color: darken($color-highlight, 15%);
                bottom: 0;
                left: 0;
            }
        }
    }
</style>