import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import bookList from '@/components/BookList'
// import BookCreate from '@/components/BookCreate'
// import BookEdit from '@/components/BookEdit'
// import BookDetails from '@/components/BookDetails'
// import BookList from '@/components/BookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'book-list',
      component: bookList
    }
  ]
})
