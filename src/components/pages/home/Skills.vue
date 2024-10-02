<template>
    <section id="skills" class="bg-hard" :class="{ dark }">
        <h2>
            <hr class="left">
            <span>
                What I know
            </span>
            <hr class="right">
        </h2>
        <div class="cards-container">
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/code.png">
                    <h5>HTML5 & CSS3</h5>
                </div>
                <div class="body">
                    <p>
                        Mastery of the main technologies involved in 
                        building web pages, as well as responsive and 
                        intuitive sites.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/vue.svg">
                    <h5>Vue.js</h5>
                </div>
                <div class="body">
                    <p>
                        I master all the fundamentals of Vue.js, 
                        creating dynamic and consistent applications.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/laravel.svg">
                    <h5>Laravel</h5>
                </div>
                <div class="body">
                    <p>
                        I know the fundamental concepts of Laravel, 
                        such as routes, MVC architecture, migrations 
                        and middlewares.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/c-sharp.png">
                    <h5>C#</h5>
                </div>
                <div class="body">
                    <p>
                        I have knowledge of the fundamentals of C# 
                        for building desktop systems with database integration.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/react.png">
                    <h5>React</h5>
                </div>
                <div class="body">
                    <p>
                        Basic Knowledge of the concepts involved, 
                        being able to develop simple websites like landing pages.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/php.svg">
                    <h5>PHP</h5>
                </div>
                <div class="body">
                    <p>
                        Basic knowledge of the language, 
                        greater experience using it in laravel.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/js.png">
                    <h5>JavaScript</h5>
                </div>
                <div class="body">
                    <p>
                        Knowledge in building desktop and 
                        mobile apps, as well as dynamic and interactive websites.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/git.png">
                    <h5>Git</h5>
                </div>
                <div class="body">
                    <p>
                        I'm able to use the git code versioner.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="head">
                    <img src="@/assets/imgs/python.png">
                    <h5>Python</h5>
                </div>
                <div class="body">
                    <p>
                        Basic knowledge of the language, 
                        having built some CLI applications with 
                        sockets and threads.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SkillsComponent',
    computed: mapState(['dark'])
}
</script>

<style scoped>
section.dark .card { border-color: var(--black-soft); }
section .card { border-color: var(--white-soft); }

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

section.dark .card .head {
    background-color: var(--black-soft);
}

section .card .head {
    background-color: var(--white-soft);
}

section {
    width: 100%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
}

h2 span {
    font-size: 1.4rem;
}

h2 {
    margin: 50px 0;
    width: 100%;

    display: flex; align-items: center;
}

h2 hr {
    height: 1px; flex-grow: 1;
    border: 0;
}

section > h2 hr.left { margin-right: 20px; }
section > h2 hr.right { margin-left: 20px; }

.cards-container {
    width: 100%; margin: 40px 0;
    display: grid; grid-template-columns: repeat(1, 1fr);
    justify-items: center; justify-content: space-between;
    align-items: stretch; gap: 40px;
}

.card {
    width: 260px;
    border: 1px solid;
    border-radius: 0;
}

.card .head {
    display: flex;
    align-items: center;
    justify-content: center;
}

.card .head img {
    height: 30px; margin-right: 15px;
}

.card .head h5 {
    font-size: 1rem;
}

.card .body p {
    text-align: center;
    font-size: 0.9rem;
}

.card .head, .card .body {
    padding: 10px 20px;
}

@media (min-width: 591px) {
    .cards-container {
        grid-template-columns: repeat(2, 1fr);
        justify-items: stretch;
    }

    .card {
        width: auto;
    }
}

@media (min-width: 920px) {
    .cards-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1240px) {
    .cards-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>