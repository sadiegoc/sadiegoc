<template>
  <div class="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/templates/Header.vue'
import Content from '@/components/templates/Content.vue'
import Footer from '@/components/templates/Footer.vue'

export default {
  name: 'App',
  components: { Header, Content, Footer }
}
</script>

<style>
:root {
  --header-h: 65px;
  --footer-h: 120px;

  --black-hard: #000;
  --black-half: #151515;
  --black-soft: #303030;
  
  --white-hard: #f5f5f5;
  --white-half: #e5e5e5;
  --white-soft: #d5d5d5;

  --color-theme: #EC4E20;

  --border-r: 5px;
}

@font-face {
  font-family: inter;
  src: url(./assets/fonts/inter.ttf);
}

@font-face {
  font-family: source-code;
  src: url(./assets/fonts/sourcecode.ttf);
}

* {
  font-family: source-code;
  box-sizing: border-box;
  margin: 0; padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%; height: 100%;
}

a { text-decoration: none; }
button {
  border: none;
  cursor: pointer;
  border-radius: var(--border-r);
  background: transparent;
}

/* THEME CONFIGURATION */
*.dark, .dark * { color: var(--white-half); }
* { color: var(--black-half); }

.bg-hard.dark { background-color: var(--black-hard); }
.bg-half.dark { background-color: var(--black-half); }
.bg-soft.dark { background-color: var(--black-soft); }

.bg-hard { background-color: var(--white-hard); }
.bg-half { background-color: var(--white-half); }
.bg-soft { background-color: var(--white-soft); }

.bg-theme { background-color: var(--color-theme); }
</style>
