<template>
  <div>
    <div class="shelf">
      <div class="shelf__item" v-for="book in sortBooks" :key="book">
        <img :src="book.image" alt="">
        <span>{{ book.name }}</span>
      </div>
    </div>

    <div class="control">
      <select v-model="sortOrder">
        <option value="" selected>Sort</option>
        <option value="A-Z">A→Z</option>
        <option value="Z-A">Z←A</option>
      </select>
    </div>
  </div>
</template>

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

.control {
  position: fixed;
  top: 0;
  right: 0;

  > select {
    font-size: 2rem;
  }
}
</style>

<script>
import books from './books.json'

export default {
  data() {
    return {
      books: books,
      sortOrder: ''
    };
  },
  computed: {
    sortBooks: function () {
      if (this.sortOrder == 'A-Z') {
        return this.books.sort(function(a, b) {
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
      }
      if (this.sortOrder == 'Z-A') {
        return this.books.sort(function(a, b) {
          if(a.name < b.name) return 1;
          if(a.name > b.name) return -1;
          return 0;
        });
      }

      return this.books.sort(function(a, b) {
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
      });
    }
  }
}
</script>