<template>
        <div style="border:2px solid black; width:100%; text-align:center;">
        <div><input type="text" v-model="bookName" placeholder="book name" />
        <input type="text"  v-model="bookPrice" placeholder="book price" />
        <input type="text" v-model="bookAuthor" placeholder="author" /></div>
        <div><input type="text" v-model="imgUrl" placeholder="image url" /></div>
        <div><textarea style="min-width:350px" v-model="desc" placeholder="desc" /></div>
        <button style="text-align:center" @click="saveBook()">Save</button>
        </div>
</template>
<script>
    export default{
      name: 'book-edit',
      props: ['selectedBook', 'books', 'local', 'currBook'],
      data () {
        return {
          bookName: '',
          bookPrice: '',
          bookAuthor: '',
          imgUrl: '',
          desc: ''
        }
      },
      methods: {
        saveBook () {
          var editedBook = {
            name: '' + this.bookName,
            price: '' + this.bookPrice,
            author: '' + this.bookAuthor,
            imgUrl: '' + this.imgUrl,
            desc: '' + this.desc
          }
          this.$emit('saveBook', editedBook)
        }
      }
    }
</script>

<style>
    
</style>
