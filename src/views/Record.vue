<template>
    <Layout class-prefix="record-layout">
       <NumberPad />
       <Notes />
       <Tags />
       <Types />
    </Layout>
</template>

<script lang="ts">
    import Types from '@/components/Record/Types.vue'
    import Notes from '@/components/Record/Notes.vue'
    import Tags from '@/components/Record/Tags.vue'
    import NumberPad from '@/components/Record/NumberPad.vue'
    export default {
        components: {
            Types,Notes,Tags,NumberPad
        }
    }
</script>

<style lang="scss">
    .record-layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
