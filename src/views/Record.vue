<template>
    <Layout class-prefix="record-layout">
        {{recordData}}
       <NumberPad :amount.sync="recordData.amount" />
       <Notes :notes.sync="recordData.notes" />
       <Tags :tags.sync="recordData.tags" />
       <Types :type.sync="recordData.type" />
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import Types from '@/components/Record/Types.vue'
    import Notes from '@/components/Record/Notes.vue'
    import Tags from '@/components/Record/Tags.vue'
    import NumberPad from '@/components/Record/NumberPad.vue'

    type RecordData = {
        tags: string[],
        notes: string,
        amount: number,
        type: string
    }

    @Component({
        components:{
            Types,Notes,Tags,NumberPad
        }
    })
    export default class Record extends Vue{
        recordData:RecordData = {
            tags: ['餐饮', '交通', '购物', '医疗'],
            notes: "",
            amount: 0,
            type: "-"
        }
    }
</script>

<style lang="scss">
    .record-layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
