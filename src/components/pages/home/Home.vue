<template>
    <article id="home" class="bg-hard" :class="{ dark }">
        <div class="container">
            <Presentation></Presentation>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
        </div>
    </article>
</template>

<script>
import { mapState } from 'vuex';
import Presentation from './Presentation.vue';
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import About from './About.vue';

export default {
    name: 'HomePage',
    computed: mapState(['dark']),
    components: {
        Presentation,
        About,
        Skills,
        Projects
    }
}
</script>

<style scoped>
.container {
    width: 70%; margin: auto;
    display: flex; flex-direction: column;
    justify-content: flex-start; align-items: center;
}

@media (max-width: 1440px) {
    .container {
        width: 80%;
    }
}

@media (max-width: 1050px) {
    .container {
        width: 90%;
    }
}
</style>