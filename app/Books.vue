<style lang="scss" scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
}

.shelf__item {
  width: (100% / 2);

  > img {
    display: block;
    width: 100%;
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