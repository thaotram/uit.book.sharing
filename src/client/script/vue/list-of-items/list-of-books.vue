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
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'list-of-books',
    components: {
        ...components('items/book-small')
    },
    data() {
        return {
            books: []
        };
    },
    props: {
        api: {
            default: '/api/book'
        }
    },
    created() {
        const self = this;
        axios
            .get(this.api)
            .then((response) => {
                self.books = response.data;
            });
    }
};
</script>