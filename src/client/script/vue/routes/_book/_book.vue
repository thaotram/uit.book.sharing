<template>
    <div class="full">
        <ai-list-of-books :books="books_" />
    </div>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';

export default {
    name: 'book-page',
    components: {
        ...components('list-of-books')
    },
    data() {
        return {
            books_: []
        };
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/'],
            ['Sách', '/']
        ];
        const self = this;
        axios
            .get('/api/book')
            .then((response) => {
                self.books_ = response.data;
            });
    }
};
</script>