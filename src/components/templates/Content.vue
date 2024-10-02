<template>
    <main id="content">
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: 'ContentTemplate'
}
</script>

<style scoped>
main {
    margin-top: var(--header-h);
}
</style>