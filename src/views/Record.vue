<template>
    <Layout class-prefix="record-layout">
       <NumberPad />
       <Notes />
       <Tags :tags.sync="tags" />
       <Types />
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import Types from '@/components/Record/Types.vue'
    import Notes from '@/components/Record/Notes.vue'
    import Tags from '@/components/Record/Tags.vue'
    import NumberPad from '@/components/Record/NumberPad.vue'

    @Component({
        components:{
            Types,Notes,Tags,NumberPad
        }
    })
    export default class Record extends Vue{
        tags = ['餐饮', '交通', '购物', '医疗'];
    }
</script>

<style lang="scss">
    .record-layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
