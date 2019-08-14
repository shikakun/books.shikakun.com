<style lang="scss" scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
}

.shelf__item {
  position: relative;
  width: (100% / 2);
  @media (min-width: 600px) {
    width: (100% / 3);
  }
  @media (min-width: 900px) {
    width: (100% / 4);
  }
  @media (min-width: 1200px) {
    width: (100% / 6);
  }
  @media (min-width: 1800px) {
    width: (100% / 8);
  }

  > img {
    position: relative;
    display: block;
    width: 100%;
  }

  > span {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #000;
    font-size: 4rem;
    line-height: 1;
    letter-spacing: -0.05em;
  }
}
</style>

<template>
  <div class="shelf">
    <div class="shelf__item" v-for="book in books" :key="book">
      <img :src="book.image" alt="">
      <span>{{ book.name }}</span>
    </div>
  </div>
</template>

<script>
import books from './books.json'

export default {
  data() {
    return {
      books: books
    };
  }
}
</script>