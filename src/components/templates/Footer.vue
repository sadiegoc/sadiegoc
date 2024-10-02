<template>
    <footer id="footer" class="bg-hard" :class="{ dark }">
        <div class="container">
            <div class="left">
                <div class="brand">
                    <p>
                        <a href="/">sadiegoc</a>
                    </p>
                    <p>
                        &copy; 2024 <span>Diego Sá</span>. All rights are reserved.
                    </p>
                </div>
            </div>
            <div class="right">
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
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FooterTemplate',
    computed: mapState(['dark'])
}
</script>

<style scoped>
footer#footer.dark {
    border-color: var(--black-soft);
}

footer#footer {
    border-color: var(--white-soft);
}

footer {
    min-height: var(--footer-h); inset: 0;
    border-top: 1px solid;

    display: flex; align-items: center;
}

footer .container {
    width: 70%; height: 100%;
    padding: 0; margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

footer .left, footer .right .social {
    display: flex; align-items: center;
}

footer .left .brand a {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 8px; padding-right: 8px;
    border-right: 1px solid;
}

footer .left .brand, footer .left .brand p {
    font-size: 0.8rem;
    display: flex; align-items: center;
}

footer .left .brand span {
    color: var(--color-theme);
    margin-left: 7px;
}

.social, .social a {
    display: flex; align-items: center;
}

.social a:not(:first-child) {
    margin-left: 10px;
}

.social img {
    height: 18px;
}

.social a:first-child {
    border: 1px solid;
    border-radius: 24px;
    padding: 0 16px;
    font-size: 0.7rem;
    height: 24px;
}

@media (max-width: 1440px) {
    footer .container {
        width: 80%;
    }
}

@media (max-width: 1050px) {
    footer .container {
        width: 90%;
    }
}

@media (max-width: 650px) {
    footer .container {
        padding: 10px 0;
        flex-direction: column;
        align-items: center;
    }

    footer .container .left {
        text-align: center;
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    footer .left .brand a {
        border: 0;
        margin: 0 0 10px 0;
        padding: 0;
    }

    footer .left .brand {
        flex-direction: column;
        margin-bottom: 10px;
    }
}
</style>