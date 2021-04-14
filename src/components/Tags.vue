<template>
    <div class="tags">
        <ul>
            <li class="selected">餐饮</li>
            <li>交通</li>
            <li>日用</li>
            <li>购物</li>
            <li>医疗</li>
            <li>人情</li>
            <li><Icon name="add" /></li>
        </ul>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Component } from "vue-property-decorator";

    @Component
    export default class Tags extends Vue{
        
    }
</script>

<style lang="scss" scoped>
 .tags {
        flex-grow: 1;
        flex-wrap: wrap;
        background-color: white;
        overflow: auto;
        color: rgba(30, 232, 183);

        > ul {
            display: flex;
            flex-wrap: wrap;
            padding: 20px 30px;
        }
        > ul > li {
            width: 64px;
            height: 64px;
            border: 1px solid rgba(30, 232, 183, 80%);
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            border-radius: 4px;
            &.selected {
                background-color: rgba(30, 232, 183, 50%);
                color: white;
            }
        }
    }
</style>