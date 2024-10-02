<template>
    <section id="projects" class="bg-hard" :class="{ dark }">
        <h2>
            <hr class="left">
            <span>
                Portfolio
            </span>
            <hr class="right">
        </h2>
        <div class="projects-container">
            <div class="card" id="the-best-seller">
                <button @click.prevent="tbsShow = true">The Best Seller</button>
            </div>
            <div class="card" id="to-do-list">
                <button @click.prevent="todoShow = true">To-do List</button>
            </div>
            <div class="card" id="dev-forum">
                <button @click.prevent="devforumShow = true">Dev Forum</button>
            </div>
        </div>
        <div class="projects-modals" v-if="tbsShow || todoShow || devforumShow">
            <div class="backdrop" v-if="tbsShow || todoShow || devforumShow" @click.prevent="closeModal"></div>
            <div class="modal bg-half" :class="{ dark, show: tbsShow }">
                <div class="title-bar bg-soft" :class="{ dark }">
                    <h2>The Best Seller</h2>
                    <button class="btn-close" @click.prevent="closeModal">
                        <img v-if="dark" src="@/assets/imgs/icons/close-white.png">
                        <img v-else src="@/assets/imgs/icons/close-black.png">
                    </button>
                </div>
                <div class="container">
                    <div class="slider-wrapper">
                        <div id="slider-tbs" class="slider">
                            <img src="@/assets/imgs/projects/tbs-1.png" alt="Home page">
                            <img src="@/assets/imgs/projects/tbs-2.png" alt="Home page">
                            <img src="@/assets/imgs/projects/tbs-3.png" alt="Home page">
                            <img src="@/assets/imgs/projects/tbs-4.png" alt="Home page">
                            <img src="@/assets/imgs/projects/tbs-5.png" alt="Home page">
                            <img src="@/assets/imgs/projects/tbs-6.png" alt="Home page">
                        </div>
                        <div class="control">
                            <button class="prev" @click="prevSlide('tbs')">
                                <img src="@/assets/imgs/icons/prev.png" alt="Next">
                            </button>
                            <button class="next" @click="nextSlide('tbs')">
                                <img src="@/assets/imgs/icons/next.png" alt="Previous">
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <div class="title">
                            <h2>The Best Seller</h2>
                            <small>Book Shop</small>
                        </div>
                        <div class="details">
                            <p>
                                A Vue.js-based e-commerce platform focused on book sales. 
                                This project includes a shopping cart system, user authentication, 
                                and an integrated Redis cache for cart store. The 
                                front-end is highly interactive and user-friendly, while the back-end 
                                is built to handle scalable transactions.
                            </p>
                        </div>
                        <div class="techniques">
                            <h5>Techniques</h5>
                            <ul>
                                <li>RESTful API</li>
                                <li>JWT Authentication</li>
                                <li>Server-side cache with Redis</li>
                            </ul>
                        </div>
                        <div class="technologies">
                            <h5>Technologies</h5>
                            <div class="technologies-container">
                                <img src="@/assets/imgs/vue.svg" alt="Vue.js">
                                <img src="@/assets/imgs/html5.png" alt="HTML5">
                                <img src="@/assets/imgs/css3.png" alt="CSS3">
                                <img src="@/assets/imgs/js.png" alt="JavaScript">
                                <img src="@/assets/imgs/mysql.png" alt="MySQL">
                                <img src="@/assets/imgs/node.png" alt="Node.js">
                                <img src="@/assets/imgs/postman.png" alt="Postman">
                                <img src="@/assets/imgs/redis.png" alt="Redis">
                            </div>
                        </div>
                        <div class="github">
                            <a href="https://github.com/sadiegoc/the-best-seller" target="blank">
                                <img v-if="dark" src="@/assets/imgs/icons/social/github-white.png" alt="GitHub">
                                <img v-else src="@/assets/imgs/icons/social/github-black.png" alt="GitHub">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal bg-half" :class="{ dark, show: todoShow }">
                <div class="title-bar bg-soft" :class="{ dark }">
                    <h2>To-do List</h2>
                    <button class="btn-close" @click.prevent="closeModal">
                        <img v-if="dark" src="@/assets/imgs/icons/close-white.png">
                        <img v-else src="@/assets/imgs/icons/close-black.png">
                    </button>
                </div>
                <div class="container">
                    <div class="slider-wrapper">
                        <div id="slider-todo" class="slider">
                            <img src="@/assets/imgs/projects/to-do-list-1.png" alt="Home page">
                            <img src="@/assets/imgs/projects/to-do-list-2.png" alt="Home page">
                            <img src="@/assets/imgs/projects/to-do-list-3.png" alt="Home page">
                        </div>
                        <div class="control">
                            <button class="prev" @click="prevSlide('todo')">
                                <img src="@/assets/imgs/icons/prev.png" alt="Next">
                            </button>
                            <button class="next" @click="nextSlide('todo')">
                                <img src="@/assets/imgs/icons/next.png" alt="Previous">
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <div class="title">
                            <h2>To-do List</h2>
                            <small>A tasks lists organization</small>
                        </div>
                        <div class="details">
                            <p>
                                A task management web application built with Vue.js 
                                and Knex.js. The app allows users to create, manage, 
                                and update task lists and their associated items. 
                                The project uses a relational database to efficiently 
                                store lists and items, with a smooth user experience 
                                thanks to real-time updates and a clean interface.
                            </p>
                        </div>
                        <div class="techniques">
                            <h5>Techniques</h5>
                            <ul>
                                <li>RESTful API</li>
                            </ul>
                        </div>
                        <div class="technologies">
                            <h5>Technologies</h5>
                            <div class="technologies-container">
                                <img src="@/assets/imgs/vue.svg" alt="Vue.js">
                                <img src="@/assets/imgs/html5.png" alt="HTML5">
                                <img src="@/assets/imgs/css3.png" alt="CSS3">
                                <img src="@/assets/imgs/js.png" alt="JavaScript">
                                <img src="@/assets/imgs/mysql.png" alt="MySQL">
                                <img src="@/assets/imgs/node.png" alt="Node.js">
                                <img src="@/assets/imgs/postman.png" alt="Postman">
                            </div>
                        </div>
                        <div class="github">
                            <a href="https://github.com/sadiegoc/to-do-list" target="blank">
                                <img v-if="dark" src="@/assets/imgs/icons/social/github-white.png" alt="GitHub">
                                <img v-else src="@/assets/imgs/icons/social/github-black.png" alt="GitHub">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal bg-half" :class="{ dark, show: devforumShow }">
                <div class="title-bar bg-soft" :class="{ dark }">
                    <h2>Dev Forum</h2>
                    <button class="btn-close" @click.prevent="closeModal">
                        <img v-if="dark" src="@/assets/imgs/icons/close-white.png">
                        <img v-else src="@/assets/imgs/icons/close-black.png">
                    </button>
                </div>
                <div class="container">
                    <div class="slider-wrapper">
                        <div id="slider-devforum" class="slider">
                            <img src="@/assets/imgs/projects/dev-forum-1.png" alt="Home page">
                            <img src="@/assets/imgs/projects/dev-forum-2.png" alt="Home page">
                            <img src="@/assets/imgs/projects/dev-forum-3.png" alt="Home page">
                            <img src="@/assets/imgs/projects/dev-forum-4.png" alt="Home page">
                            <img src="@/assets/imgs/projects/dev-forum-5.png" alt="Home page">
                        </div>
                        <div class="control">
                            <button class="prev" @click="prevSlide('devforum')">
                                <img src="@/assets/imgs/icons/prev.png" alt="Next">
                            </button>
                            <button class="next" @click="nextSlide('devforum')">
                                <img src="@/assets/imgs/icons/next.png" alt="Previous">
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <div class="title">
                            <h2>Dev Forum</h2>
                            <small>A forum for posts and comments for devs</small>
                        </div>
                        <div class="details">
                            <p>
                                A forum application designed for developers to discuss 
                                programming-related topics. Built with Knex.js and Vue.js, 
                                the project features a robust back-end that handles user 
                                authentication, post creation, and threaded comments. The 
                                app also supports rich text content and includes user 
                                management, making it a fully functional forum for developer communities.
                            </p>
                        </div>
                        <div class="techniques">
                            <h5>Techniques</h5>
                            <ul>
                                <li>RESTful API</li>
                                <li>JWT Authentication</li>
                            </ul>
                        </div>
                        <div class="technologies">
                            <h5>Technologies</h5>
                            <div class="technologies-container">
                                <img src="@/assets/imgs/vue.svg" alt="Vue.js">
                                <img src="@/assets/imgs/html5.png" alt="HTML5">
                                <img src="@/assets/imgs/css3.png" alt="CSS3">
                                <img src="@/assets/imgs/js.png" alt="JavaScript">
                                <img src="@/assets/imgs/mysql.png" alt="MySQL">
                                <img src="@/assets/imgs/node.png" alt="Node.js">
                                <img src="@/assets/imgs/postman.png" alt="Postman">
                            </div>
                        </div>
                        <div class="github">
                            <a href="https://github.com/sadiegoc/dev-forum" target="blank">
                                <img v-if="dark" src="@/assets/imgs/icons/social/github-white.png" alt="GitHub">
                                <img v-else src="@/assets/imgs/icons/social/github-black.png" alt="GitHub">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ProjectsComponent',
    computed: mapState(['dark']),
    data: function () {
        return {
            tbsShow: false,
            todoShow: false,
            devforumShow: false,
            sliders: {
                tbs: { currentSlide: 0, totalSlides: 6 },
                todo: { currentSlide: 0, totalSlides: 3 },
                devforum: { currentSlide: 0, totalSlides: 5 }
            }
        }
    },
    methods: {
        nextSlide (sliderId) {
            const slider = this.sliders[sliderId]
            
            if (slider.currentSlide < slider.totalSlides - 1) {
                slider.currentSlide++
            } else {
                slider.currentSlide = 0
            }

            this.scrollToSlide(sliderId)
        },
        prevSlide (sliderId) {
            const slider = this.sliders[sliderId]

            if (slider.currentSlide > 0) {
                slider.currentSlide--
            } else {
                slider.currentSlide = slider.totalSlides - 1
            }

            this.scrollToSlide(sliderId)
        },
        scrollToSlide (sliderId) {
            const slider = document.querySelector(`#slider-${sliderId}`)
            const slideWidth = slider.querySelector('img').clientWidth
            const sliderState = this.sliders[sliderId]
            slider.scrollTo({
                left: slideWidth * sliderState.currentSlide,
                behavior: 'smooth'
            })
        },
        closeModal () {
            this.tbsShow = false
            this.todoShow = false
            this.devforumShow = false
        }
    }
}
</script>

<style scoped>
section.dark .modal .technologies img { background-color: var(--black-soft); }
section .modal .technologies img { background-color: var(--white-soft); }

section.dark .modal,
section.dark .card,
section.dark .slider {
    border-color: var(--black-soft);
}

section .modal,
section .card,
section .slider {
    border-color: var(--white-soft);
}

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

.projects-container {
    width: 100%; margin: 40px 0;
    display: grid; grid-template-columns: repeat(1, 1fr);
    justify-items: center; justify-content: space-between;
    align-items: stretch; gap: 20px 0;
}

section > h2 {
    font-size: 1.6rem;
    margin: 50px 0;
}

.card {
    width: 300px; height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    border: 4px solid;

    display: flex;
    justify-content: center;
    align-items: center;
}

#the-best-seller {
    background-image: url(../../../assets/imgs/projects/tbs-1.png);
}

#to-do-list {
    background-image: url(../../../assets/imgs/projects/to-do-list-1.png);
}

#dev-forum {
    background-image: url(../../../assets/imgs/projects/dev-forum-1.png);
}

.card button {
    display: none;
    width: 100%; height: 100%;
    border-radius: 0;
    
    color: white;
    font-size: 1.1rem;
    text-transform: uppercase;
    
    background-color: rgba(0, 0, 0, 0.4);
}

.card:hover button, .card:hover .backdrop {
    display: block;
}

/* MODAL STYLES */
.projects-modals {
    position: fixed; inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    width: 1000px; height: auto;
    display: none; z-index: 999;

    border: 1px solid;
    border-radius: var(--border-r);
}

.modal.show {
    display: block;
}

.modal .title-bar {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal .title-bar .btn-close {
    display: flex; align-items: center;
}

.modal .title-bar h2 {
    font-size: 1rem;
    font-weight: 100;
}

.modal .title-bar img {
    width: 16px;
}

.projects-modals .modal .container {
    max-height: 70vh; overflow-y: auto;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: start;
}

.slider-wrapper {
    width: 50%;
    position: relative;
    margin: 0 auto;
}

.slider-wrapper .control {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    inset: 0;
}

.slider-wrapper button {
    width: 26px; height: 26px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 2rem; border-radius: 50%;
    margin: 0 5px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-wrapper button img {
    width: 18px;
}

.slider {
    display: flex;
    aspect-ratio: 1 / 1;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    border: 4px solid;
}

.slider img {
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
}

.slider-nav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 555;
}

.slider-nav a {
    width: 0.5rem; height: 0.5rem;
    border-radius: 50%;
    background-color: white;
    opacity: 0.75;
    transition: opacity ease 250ms;
}

.modal .description {
    margin-left: 20px; height: 100%;
    display: flex; flex-direction: column;
}

.modal .description .title {
    margin-bottom: 10px;
}

.modal .description small {
    font-size: 1.1rem;
    color: #666;
}

.modal .description p {
    text-align: justify;
    font-size: 0.9rem;
}

.modal .technologies h5,
.modal .techniques h5 {
    margin: 20px 0 10px 0;
} 

.modal .technologies-container {
    display: grid; grid-template-columns: repeat(2, 1fr);
    justify-items: center; justify-content: center;
    align-items: stretch; gap: 20px;
}

.modal .technologies-container img {
    width: 62px; margin: 0 5px;
    border-radius: var(--border-r);
    padding: 10px;
}

.modal .techniques ul {
    margin-left: 20px;
}

.modal .techniques ul li {
    font-size: 0.9rem;
}

.modal .github {
    margin: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.modal .github a {
    border: 1px solid;
    border-radius: 24px;
    padding: 0 16px;
    font-size: 0.7rem;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal .github img {
    width: 16px; margin-right: 10px;
}

.backdrop {
    position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.7);
}

@media (min-width: 380px) {
    .modal .technologies-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 480px) {
    .modal .technologies-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 630px) {
    .projects-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .modal .technologies-container {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media (min-width: 920px) {
    .projects-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 1200px) {
    .modal {
        width: 900px;
    }

    .card {
        width: 260px; height: 260px;
    }
}

@media (max-width: 1000px) {
    .modal {
        width: 800px;
    }
}

@media (max-width: 920px) {
    .modal {
        width: 90%;
    }

    .slider-wrapper {
        width: 100%;
    }

    .modal .container {
        flex-direction: column;
    }

    .modal .description {
        margin: 10px;
    }
}

@media (min-width: 920px) {
    .modal .technologies-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>