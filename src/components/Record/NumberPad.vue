<template>
    <div class="numberPad">
            <div class="output">
                {{output}}
            </div>
            <div class="buttons">
                <button @click="inputContent">1</button>
                <button @click="inputContent">2</button>
                <button @click="inputContent">3</button>
                <button @click="deleteContent">删除</button>
                <button @click="inputContent">4</button>
                <button @click="inputContent">5</button>
                <button @click="inputContent">6</button>
                <button @click="clear">清空</button>
                <button @click="inputContent">7</button>
                <button @click="inputContent">8</button>
                <button @click="inputContent">9</button>
                <button class="ok" @click="ok">OK</button>
                <button class="zero" @click="inputContent">0</button>
                <button class="point" @click="inputContent">.</button>
            </div>
        </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component,Prop} from "vue-property-decorator";
   
    @Component
    export default class NumberPad extends Vue{
        @Prop({required:true, type:Number}) amount!:number;

        output = this.amount.toString();

        inputContent(event: PointerEvent): void {
            const button = event.target as HTMLButtonElement;
            const text = button.textContent as string;
            if (this.output === '0') {
                if("0123456789".indexOf(text) >= 0) {
                    this.output = text;
                    return;
                }
            }
            
            if(this.output.indexOf(".") >= 0 && text === ".") {
                return;
            }

            this.output += text;
        }

        deleteContent():void {
            if(this.output.length === 1) {
                this.output = "0";
                return;
            }
            this.output = this.output.slice(0,-1);
        }
        
        clear():void {
            this.output = "0";
        }

        ok():void {
            
            if(this.output[this.output.length - 1] === '.') {
                this.output += "0";
            }

            this.$emit("update:amount", parseFloat(this.output));
            this.$emit("submit");
            this.output = "0";
        }


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