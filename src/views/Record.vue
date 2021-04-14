<template>
    <Layout class-prefix="record-layout">
       <NumberPad />
       <Notes />
       <Tags />
       <Types />
    </Layout>
</template>

<script lang="ts">
    import Types from '@/components/Types.vue'
    import Notes from '@/components/Notes.vue'
    import Tags from '@/components/Tags.vue'
    import NumberPad from '@/components/NumberPad.vue'
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
