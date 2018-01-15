<template>
    <transition-group name="book"
                      tag="div"
                      class="row flex-wrap"> -->
        <ai-book-small v-for="(book, index) in books"
                       :book="book"
                       :key="index" />
    </transition-group>
</template>
<script>
// import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'ListOfBooks',
    components: {
        ...components('items/book-small')
    },
    props: {
        books: {
            type: Array,
            default: () => []
        }
    }
};
</script>