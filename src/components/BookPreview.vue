<template>
    <div><img :src="currBook.imgUrl"></img>
    <p>{{currBook.name}} - {{currBook.price}}{{local.currency}}</p>
    </div>
</template>
<script>
    export default{
      name: 'book-preview',
      props: ['selectedBook', 'books', 'local', 'currBook']
    }
</script>

<style>
    img{
    max-height:300px;
    max-width:250px;
    }
</style>
