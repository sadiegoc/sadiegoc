<template>
    <section id="about" class="bg-hard" :class="{ dark }">
        <h2>
            <hr class="left">
            <span>
                About
            </span>
            <hr class="right">
        </h2>
        <div class="about-container">
            <div class="photo"></div>
            <div class="about-me">
                <p>
                    I'm a self-taught web developer focused on creating efficient 
                    and functional solutions on both the frontend and backend.
                    I am always looking for new challenges that allow me to grow professionally.
                </p>
                <p>
                    My journey as a programmer started as a passion for science and technology. Over time, I have been improving 
                    my skills through personal projects and continuous study, always with 
                    the aim of applying my knowledge in collaborative and challenging environments.
                </p>
                <a class="bg-hard" :class="{ dark: !dark }" target="blank" href="mailto:sa.diego.coder@gmail.com">Schedule a meeting</a>
            </div>
        </div>
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

.about-container {
    max-width: 800px; width: 100%;
    padding: 40px 0 60px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.about-container .photo,
.about-container .about-me {
    width: 50%;
}

.about-container .photo {
    aspect-ratio: 7 / 8;
    background-image: url('../../../assets/imgs/photo.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: var(--border-r);
}

.about-container .about-me {
    padding-left: 20px;
    
    display: flex; flex-direction: column;
    align-items: flex-end; justify-content: flex-start;
}

.about-container .about-me p {
    margin-bottom: 15px;
    text-align: justify;
    text-indent: 20px;
}

.about-me a {
    font-size: 0.7rem;
    font-weight: bold;
    
    border-radius: 38px;
    padding: 0 18px;
    height: 38px; width: fit-content;
    
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0.8;
}

.about-me a:hover {
    opacity: 1;
}

.about-me a {
    color: var(--black-hard);
}

.about-me a.dark {
    color: var(--white-hard);
}

@media (max-width: 660px) {
    .about-container {
        flex-direction: column;
        padding: 40px;
    }

    .about-container .photo,
    .about-container .about-me {
        width: 100%;
    }

    .about-container .about-me {
        padding: 0;
        align-items: center;
    }

    .about-container .about-me p {
        margin: 25px 0;
    }

    .about-me a {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .about-container {
        padding: 40px 0;
    }
}
</style>