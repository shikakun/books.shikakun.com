<template>
  <ul>
    <li v-for="book in books" :key="book">
      <img :src="book.image" alt="">
      <span>{{ book.name }}</span>
    </li>
  </ul>
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