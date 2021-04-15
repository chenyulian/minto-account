<template>
    <Layout class-prefix="record-layout">
       <NumberPad :amount.sync="recordData.amount" @submit="onSubmit" />
       <Notes :notes.sync="recordData.notes" />
       <Tags :tags.sync="dataSource" :selectedTag.sync="recordData.tag" />
       <Types :type.sync="recordData.type" />
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component,Watch } from 'vue-property-decorator'
    import Types from '@/components/Record/Types.vue'
    import Notes from '@/components/Record/Notes.vue'
    import Tags from '@/components/Record/Tags.vue'
    import NumberPad from '@/components/Record/NumberPad.vue'

    type RecordData = {
        tag: string,
        notes: string,
        amount: number,
        type: string,
        createTime?: Date
    }

    @Component({
        components:{
            Types,Notes,Tags,NumberPad
        }
    })
    export default class Record extends Vue{
        recordData:RecordData = {
            tag: "",
            notes: "",
            amount: 0,
            type: "-"
        };
        
        dataSource = JSON.parse(localStorage.getItem("tags") || "[]");
        recordDataList: RecordData[] = JSON.parse(localStorage.getItem("recordDataList") || "[]");

        onSubmit():void {
            const data = JSON.parse(JSON.stringify(this.recordData));
            data.createTime = new Date();
            this.recordDataList.push(data);
        } 

        @Watch("recordDataList")
        onRecordDataListChange():void {
            localStorage.setItem("recordDataList", JSON.stringify(this.recordDataList));
        }

        @Watch("dataSource")
        onDataSourceChange():void {
            localStorage.setItem("tags",JSON.stringify(this.dataSource));
        }

    }
</script>

<style lang="scss">
    .record-layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
