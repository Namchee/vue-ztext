<script>
import { defineComponent } from 'vue';
import ZText from './../ZText';

export default defineComponent({
  components: {
    ZText,
  },
});
</script>

<template>
  <div class="container">
    <z-text class="demo" :layers="50" :depth="'50px'">
      <img
        src="/logo.png"
        width="240"
        height="240"
        title="Vue logo"
        alt="Vue logo"
      />
    </z-text>

    <h1 class="heading">
      <span class="blue">
        Vue
      </span>

      <span class="green">
        ZText
      </span>
    </h1>

    <p>
      Declarative wrapper for
        <a href="https://bennettfeely.com/ztext/" class="green" target="_blank" rel="noreferrer">
          ZText.js
        </a>
      — 3D typography for the web.
    </p>

    <p>
      Because <b>you</b> deserve declarative awesomeness.
    </p>

    <a href="https://github.com/Namchee/vue-ztext" target="_blank" rel="noreferrer" class="green project__link">
      Documentation
    </a>
  </div>
</template>

<style lang="postcss">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  margin: auto;
  padding: 4rem;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #121212;
  font-family: -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.blue {
  color: #34495E;
}

.green {
  color: #41B883;
}

.project__link {
  font-size: 1rem;
  margin-top: 3rem;
}

.heading {
  font-weight: 500;
  margin-bottom: 1rem;
}

.demo {
  margin-bottom: 3.5rem;
}

.z-text {
  transform: rotateX(30deg) rotateY(-30deg);
  transition: transform 1s;
}

.demo:hover .z-text {
  transform: rotateX(-30deg) rotateY(30deg);
}
</style>
