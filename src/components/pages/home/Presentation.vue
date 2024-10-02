<template>
    <section id="presentation">
        <div class="image">
            <img src="@/assets/imgs/typing.gif" alt="Typing">
        </div>
        <div class="resume">
            <div class="data">
                <h1>Diego Sá</h1>
                <h2>&lt;Front-End Developer/&gt;</h2>
                <p>
                    I'm a Web Developer passionate about creating dynamic and 
                    efficient web solutions. With expertise in Vue.js and backend 
                    technologies, I build responsive, secure, and scalable 
                    applications tailored to meet your business needs.
                </p>
                <p>
                    Want to enhance your app’s performance and functionality? I’m here to help.
                </p>
                <ul>
                    <li>
                        Interactive user interfaces with Vue 3
                    </li>
                    <li>
                        REST APIs with JWT and OAuth authentication
                    </li>
                    <li>
                        Backend development with Node.js and Knex
                    </li>
                    <li>
                        and more...
                    </li>
                </ul>
            </div>
            <div class="social">
                <a target="blank" rel="noopener noreferrer" href="resume.pdf">Resume</a>
                <a target="blank" href="https://github.com/sadiegoc">
                    <img v-if="dark" src="@/assets/imgs/icons/social/github-white.png" alt="GitHub">
                    <img v-else src="@/assets/imgs/icons/social/github-black.png" alt="GitHub">
                </a>
                <a target="blank" href="https://www.linkedin.com/in/sadiegoc/">
                    <img v-if="dark" src="@/assets/imgs/icons/social/linkedin-white.png" alt="Linked In">
                    <img v-else src="@/assets/imgs/icons/social/linkedin-black.png" alt="Linked In">
                </a>
                <a target="blank" href="https://wa.me/5554993660056">
                    <img v-if="dark" src="@/assets/imgs/icons/social/whatsapp-white.png" alt="Whatsapp">
                    <img v-else src="@/assets/imgs/icons/social/whatsapp-black.png" alt="Whatsapp">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PresentationComponent',
    computed: mapState(['dark'])
}
</script>

<style scoped>
section {
    padding: 120px 0;
    width: 100%; height: fit-content;
    display: flex; flex-direction: row-reverse;
    justify-content: space-between; align-items: center;
}

.image, .resume {
    width: 50%; height: 100%;
    display: flex; flex-direction: column;
    justify-content: center;
}

.image { align-items: flex-end; padding-left: 10px; }
.resume { align-items: flex-start; }

.image img {
    max-width: 420px; width: 100%;
    border-radius: 50%;
}

.data, .social {
    align-items: flex-start;
}

.data h1 {
    font-size: 4rem;
    color: var(--color-theme);
}

.data h2 {
    font-size: 1.4rem;
}

.data p {
    margin: 20px 0;
}

.data p, .data ul li {
    font-size: 0.9rem;
    opacity: 0.7;
}

.data ul {
    margin-top: 20px;
    margin-left: 20px;
}

.social {
    margin-top: 20px;
}

.social, .social a {
    display: flex; align-items: center;
}

.social a:not(:first-child) {
    margin-left: 10px;
}

.social img {
    height: 24px;
}

.social a:first-child {
    border: 1px solid;
    border-radius: 24px;
    padding: 0 16px;
    font-size: 0.8rem;
    height: 32px;
}

@media (max-width: 992px) {
    .data h1 {
        font-size: 3rem;
    }

    .data small {
        font-size: 1.1rem;
    }
}

@media (max-width: 660px) {
    section {
        flex-direction: column;
        padding: 50px 0;
        height: auto;
    }

    .image, .resume {
        align-items: center;
        width: 100%;
        margin: 20px 0;
        padding: 0;
    }

    .data h1, .data h2 {
        text-align: center;
    }

    .data p {
        text-align: justify;
    }
}
</style>