<template>
    <div class="tags">
        <ul>
            <li v-for="tag in tags" 
                :key="tag" 
                :class="tag === selectedTag?'selected':''"
                @click="selectTag(tag)">
                {{tag}}
            </li>
            <li @click="addTag"><Icon name="add" /></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component,Prop } from "vue-property-decorator";

    @Component
    export default class Tags extends Vue{
        @Prop({ required: true, type: Array }) tags!: string[];
        // to fix: tags可能为空数组
        selectedTag = this.tags[0];

        selectTag(tag: string):void {
            this.selectedTag = tag;
        }
        
        addTag():void {
            const tagName = window.prompt('请输入标签名');
            if (tagName === '') {
                alert('标签名不能为空');
                return;
            } else {
                this.$emit('update:tags', [...this.tags,tagName]);
            }
        }
    }
</script>

<style lang="scss" scoped>
 @import "~@/assets/style/common.scss";
 .tags {
        flex-grow: 1;
        flex-wrap: wrap;
        background-color: white;
        overflow: auto;
        color: $color-highlight;
        font-family: $font-hei;

        > ul {
            display: flex;
            flex-wrap: wrap;
            padding: 20px 30px;
        }
        > ul > li {
            width: 64px;
            height: 64px;
            border: 1px solid $color-highlight;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            border-radius: 4px;
            &.selected {
                background-color: $color-highlight;
                color: white;
            }
        }
    }
</style>