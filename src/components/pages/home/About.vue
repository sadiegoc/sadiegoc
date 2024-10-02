<template>
    <section id="about" class="bg-hard" :class="{ dark }">
        <h2>
            <hr class="left">
            <span>
                About
            </span>
            <hr class="right">
        </h2>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'AboutComponent',
    computed: mapState(['dark'])
}
</script>

<style scoped>
section.dark h2 hr.left {
    background: linear-gradient(to left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
}

section h2 hr.left {
    background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

section.dark h2 hr.right {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
}

section h2 hr.right {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

section {
    width: 100%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
}

section > h2 span {
    font-size: 1.4rem;
}

section > h2 {
    margin: 50px 0;
    width: 100%;

    display: flex; align-items: center;
}

section > h2 hr {
    height: 1px; flex-grow: 1;
    border: 0;
}

section > h2 hr.left { margin-right: 20px; }
section > h2 hr.right { margin-left: 20px; }
</style>