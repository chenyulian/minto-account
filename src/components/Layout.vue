<template>
    <div class="layout-wrapper">
        <div class="content">
            <slot />
        </div>
        
        <Nav />
    </div>
</template>

<script lang="ts">
    import Nav from '@/components/Nav.vue'

    export default {
        name: 'Layout',
        components: {
            Nav
        }
    }
</script>

<style lang="scss" scoped>
    .layout-wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content{
        flex-grow: 1;
        overflow: auto;
    }
</style>