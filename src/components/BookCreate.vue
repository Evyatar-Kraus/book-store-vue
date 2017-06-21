<template>
       <div style="width:100%; margin: 0 auto;"><button @click="isOnCreateMode=!isOnCreateMode">Add Book</button>
        <div v-if="isOnCreateMode" style="border:2px solid black; width:100%; text-align:center;">
        <div><input type="text" v-model="bookName" placeholder="book name" />
        <input type="text"  v-model="bookPrice" placeholder="book price" />
        <input type="text" v-model="bookAuthor" placeholder="author" /></div>
        <div><input type="text" v-model="imgUrl" placeholder="image url" /></div>
        <div><textarea style="min-width:350px" v-model="desc" placeholder="desc" /></div>
        <button style="text-align:center" @click="createBook()">Save</button>
        </div></div>
</template>
<script>
    export default{
      name: 'book-create',
      data () {
        return {
          bookName: '',
          bookPrice: '',
          bookAuthor: '',
          imgUrl: '',
          desc: '',
          isOnCreateMode: false
        }
      },
      methods: {
        createBook () {
          var newBook = {
            name: '' + this.bookName,
            price: '' + this.bookPrice,
            author: '' + this.bookAuthor,
            imgUrl: '' + this.imgUrl,
            desc: '' + this.desc
          }
          this.isOnCreateMode = !this.isOnCreateMode
          this.$emit('createBook', newBook)
        }
      }
    }

</script>

<style>
    
</style>
