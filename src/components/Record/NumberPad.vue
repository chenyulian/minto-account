<template>
    <div class="numberPad">
            <div class="output">
                100
            </div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">OK</button>
                <button class="zero">0</button>
                <button class="point">.</button>
            </div>
        </div>
</template>

<script>
    import Vue from "vue";
    import { Component } from "vue-property-decorator";
   
    @Component
    export default class NumberPad extends Vue{
        
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/common.scss";
    .numberPad {
        color: $color-highlight;
        font-family: $font-hei;
        > .output {
            padding: 20px 10px;
            text-align: right;
            border-top: 1px solid $color-highlight;
        }
        > .buttons {
            > button {
                $h: 48px;
                width: 25%;
                height: $h;
                border-left: 1px solid $color-highlight;
                border-right: none;
                border-top: 1px solid $color-highlight;
                border-bottom: none;
                background-color: transparent;
                color: $color-highlight;
                float: left;
                &.ok {
                    height: 2*$h;
                    float:right;
                    border-bottom: 1px solid $color-highlight;
                }
                &.zero {
                    width: 50%;
                    border-bottom: 1px solid $color-highlight;
                }

                &.point {
                    border-bottom: 1px solid $color-highlight;
                }

                &:focus {
                    background-color: $color-highlight;
                    color: white;
                }
            }
            

        }
    }
</style>