<template>
    <Layout class-prefix="record-layout">
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

        <div>
            <label class="notes">
                <span class="name">备注：</span> 
                <input type="text" placeholder="请输入备注"/>
            </label>
        </div>
       
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

        <div class="type">
            <ul class="types">
                <li  class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        
    </Layout>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style lang="scss">
    .record-layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style lang="scss" scoped>
   
    .types {
        color: white;
        display: flex;
        background: rgba(30, 232, 183,50%);;
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
                background-color: rgba(30, 232, 183);
                bottom: 0;
                left: 0;
            }
        }
    }

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

    .numberPad {
        color: rgba(30, 232, 183);
        > .output {
            padding: 20px 10px;
            text-align: right;
            border-top: 1px solid rgba(30, 232, 183, 50%);
        }
        > .buttons {
            > button {
                $h: 48px;
                width: 25%;
                height: $h;
                border-left: 1px solid rgba(30, 232, 183, 50%);
                border-right: none;
                border-top: 1px solid rgba(30, 232, 183, 50%);
                border-bottom: none;
                background-color: transparent;
                color: rgba(30, 232, 183);
                float: left;
                &.ok {
                    height: 2*$h;
                    float:right;
                    border-bottom: 1px solid rgba(30, 232, 183, 50%);
                }
                &.zero {
                    width: 50%;
                    border-bottom: 1px solid rgba(30, 232, 183, 50%);
                }

                &.point {
                    border-bottom: 1px solid rgba(30, 232, 183, 50%);
                }

                &:focus {
                    background-color: rgba(30, 232, 183, 50%);
                }
            }
            

        }
    }
</style>