<template>
    <div style="text-align:center;"><img style="display:block; margin:0 auto;" :src="selectedBook.imgUrl"></img>
    <h1>{{selectedBook.name}} - {{selectedBook.price}}{{local.currency}}</h1>
    <p>Author: {{selectedBook.author}}</p>
    <p>Summary <br /> {{selectedBook.desc}}</p>
    <button v-on:click="removeBook()">Remove</button><button v-on:click="editBook()">Edit</button><button v-on:click="closeBook()">Close</button>
    </div>
</template>
<script>
    export default{
      name: 'book-details',
      data () {
        return {
        }
      },
      props: ['selectedBook', 'local'],
      methods: {
        removeBook () {
          this.$emit('removeBook')
        },
        editBook () {
          this.$emit('editBook')
        },
        closeBook () {
          this.$emit('closeBook')
        }
      },
      mounted: function () {
        window.scrollTo(0, 0)
      },
      updated: function () {
        window.scrollTo(0, 0)
      }
    }
</script>
<style scoped>
  p{
    text-align:center;
    font-size:1.2rem;
}  
</style>
