<template>
    <header id="header" class="bg-hard" :class="{ dark }">
        <div class="container">
            <div class="brand">
                <a href="/" class="name">
                    sadiegoc
                </a>
            </div>
            <nav class="nav-menu bg-hard" :class="{ dark, show: showMenu }">
                <button class="btn-menu" @click.prevent="this.$store.commit('toggleMenu', false)">
                    <img v-if="dark" src="@/assets/imgs/icons/close-white.png">
                    <img v-else src="@/assets/imgs/icons/close-black.png">
                </button>
                <ul class="menu">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#projects" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Blog</a>
                    </li>
                </ul>
            </nav>
            <div class="buttons">
                <button class="btn-theme" @click.prevent="this.$store.commit('toggleDark')">
                    <img v-if="dark" src="@/assets/imgs/icons/sun.png">
                    <img v-else src="@/assets/imgs/icons/moon.png">
                </button>
                <button class="btn-menu" @click.prevent="this.$store.commit('toggleMenu', true)">
                    <img v-if="dark" src="@/assets/imgs/icons/menu-white.png">
                    <img v-else src="@/assets/imgs/icons/menu-black.png">
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HeaderTemplate',
    computed: mapState(['dark', 'showMenu'])
}
</script>

<style scoped>
header#header.dark,
header.dark .nav-menu,
header.dark .nav-item,
header.dark .nav-item:last-child
{ border-color: var(--black-soft); }

header#header,
header .nav-menu,
header .nav-item,
header .nav-item:last-child
{ border-color: var(--white-soft); }

header.dark .menu .nav-item:not(:last-child)::after { background-color: var(--white-hard); }
header .menu .nav-item:not(:last-child)::after { background-color: var(--black-hard); }

header {
    height: var(--header-h); inset: 0;
    position: fixed; z-index: 1;
    border-bottom: 1px solid;
}

.container {
    height: 100%; width: 100%;
    padding: 0 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-menu {
    display: flex; align-items: center;
}

.btn-theme img {
    width: 18px;
}

.btn-theme {
    margin: 0 10px;
    width: 20px; height: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--border-r);
}

.brand {
    display: flex; align-items: center;
}

.menu {
    display: flex;
    list-style: none;
}

.menu .nav-item {
    display: flex; align-items: center;
}

.menu .nav-item:not(:last-child)::after {
    content: '';
    width: 3px; height: 3px;
    border-radius: 50%;
    display: block;
    margin: 0 10px;
}

.menu .nav-link:hover, .brand a:hover {
    color: var(--color-theme);
}

.brand a, .menu .nav-link {
    font-size: 0.9rem;
}

.container .btn-menu {
    display: none;
    background-color: transparent;
}

.brand a {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 600;
}

.buttons {
    display: flex; align-items: center;
}

@media (max-width: 1440px) {
    .container {
        padding: 0 50px;
    }
}

@media (max-width: 992px) {
    .container {
        padding: 0 20px;
    }
}

@media (max-width: 660px) {
    .menu .nav-item:not(:last-child)::after {
        display: none;
    }

    .nav-menu {
        position: absolute;
        width: 280px; height: 100vh;
        top: 0; bottom: 0; right: 0;
        display: none;
        border-left: 1px solid;
    }

    .nav-menu.show {
        display: flex; flex-direction: column;
    }
    
    .menu {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .nav-item {
        width: 100%; padding-left: 30px;
        display: flex; justify-content: start;
        border-top: 1px solid;
    }

    .nav-item:last-child {
        border-bottom: 1px solid;
    }

    .brand a, .menu .nav-link {
        font-size: 1rem;
    }

    .menu .nav-link {
        margin: 5px 0;
    }

    .container .btn-menu {
        display: block;
    }
    
    .nav-menu .btn-menu {
        align-self: flex-end;
        margin: 15px;
    }
}
</style>