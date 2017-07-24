

<template>
    <div class="flex" style="width:960px; margin:0 auto;"> 
        <book-create v-on:createBook="createBook"></book-create>
        <book-details  v-on:closeBook="closeBook" v-on:editBook="editBook" v-on:removeBook="removeBook" style="width:100%;" v-bind:local="local" v-if="selectedBook" :selectedBook="selectedBook"></book-details>
        <book-edit  v-on:saveBook="saveBook" v-if="isOnEditMode && selectedBook "></book-edit>
        <book-preview v-for="(book,idx) in books" v-bind:local="local" v-on:click.native="clickedBook(books[idx],idx)"  :selectedBook="selectedBook" :idx="idx" :currBook="book" :key="book"></book-preview>
    </div> 
</template>

<script>

import bookCreate from './BookCreate'
import bookPreview from './BookPreview'
import bookEdit from './BookEdit'
import bookDetails from './BookDetails'

export default{
  name: 'book-list',
  data () {
    return {
      local: {
        currency: '$'
      },
      books: [
            { name: 'The Count from Monte Cristo', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 13, author: 'Alexandre Dumas', imgUrl: 'http://bit.ly/2rJI8uZ' },
            { name: 'War and Peace', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 12.3, author: 'Leo Tolstoy', imgUrl: 'http://bit.ly/2sOyKeo' },
            { name: 'The Brothers Karamazov', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 34.3, author: 'Fyodor Dostoyevski', imgUrl: 'http://bit.ly/2sH2qty' },
            { name: 'To Kill A Mocking Bird', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 22.1, author: 'Harper Lee', imgUrl: 'http://bit.ly/2sGQKXG' },
            { name: 'Enchantment', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 44.3, author: 'Guy Kawasaki', imgUrl: 'http://bit.ly/2sGWMYi' },
            { name: 'Going For Broke', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 5, author: 'John Doe', imgUrl: 'http://bit.ly/2sOjqON' },
            { name: 'Freddie Fantastic from Planet Hulk', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 88.3, author: 'Johnatan De Mill', imgUrl: 'http://bit.ly/2srySh4' },
            { name: 'The Fifth Dog in Town', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 77, author: 'Kristina Singer', imgUrl: 'http://bit.ly/2rMNFkJ' },
            { name: 'The Count from Monte Cristo', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 13, author: 'Alexandre Dumas', imgUrl: 'http://bit.ly/2rJI8uZ' },
            { name: 'War and Peace', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 12.3, author: 'Leo Tolstoy', imgUrl: 'http://bit.ly/2sOyKeo' },
            { name: 'The Brothers Karamazov', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 34.3, author: 'Fyodor Dostoyevski', imgUrl: 'http://bit.ly/2sH2qty' },
            { name: 'To Kill A Mocking Bird', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 22.1, author: 'Harper Lee', imgUrl: 'http://bit.ly/2sGQKXG' },
            { name: 'Enchantment', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 44.3, author: 'Guy Kawasaki', imgUrl: 'http://bit.ly/2sGWMYi' },
            { name: 'Going For Broke', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 5, author: 'John Doe', imgUrl: 'http://bit.ly/2sOjqON' },
            { name: 'Freddie Fantastic from Planet Hulk', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 88.3, author: 'Johnatan De Mill', imgUrl: 'http://bit.ly/2srySh4' },
            { name: 'The Fifth Dog in Town', desc: 'The books describes blaah alavlsa slas dlasdla sdlasd asdasldasdas asdalasd asdl adslasdlasdlasd sadlasd asdads', price: 77, author: 'Kristina Singer', imgUrl: 'http://bit.ly/2rMNFkJ' }],
      selectedBook: null,
      isOnEditMode: false
    }
  },
  components: {
    bookCreate,
    bookPreview,
    bookEdit,
    bookDetails
  },
  methods: {
    clickedBook (book, idx) {
      if (book === this.selectedBook) {
        this.selectedBook = null
        return
      }
      this.selectedBook = book
      console.log('clicked ' + this.selectedBook)
    },
    removeBook () {
      console.log(this.books)
      console.log(this.selectedBook)
      var bookIndex = this.books.indexOf(this.selectedBook)
      this.books.splice(bookIndex, 1)
      this.selectedBook = null
    },
    editBook () {
      this.isOnEditMode = !this.isOnEditMode
    },
    closeBook () {
      this.selectedBook = null
      this.isOnEditMode = false
    },
    saveBook (editedBook) {
      console.log('edited')
      var selectedBookIndex = this.books.indexOf(this.selectedBook)
      this.books.splice(selectedBookIndex, 1, editedBook)
      this.selectedBook = editedBook
      console.log(editedBook)
    },
    createBook (newBook) {
      console.log('added new book')
      this.books.push(newBook)
      this.selectedBook = false
    }
  }
}
</script>
<style>

html,body{
    font-size:10px;
}

/*.modal{
    width:auto;
    height:auto;
    background-color:blue;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
*/
.flex{

    display:flex;
    flex-flow: row wrap;
    justify-content:center;
}


.flex *{
    margin:1rem;
}





</style>
