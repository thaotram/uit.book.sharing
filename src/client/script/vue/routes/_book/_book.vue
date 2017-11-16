<template>
    <ai-contain class="full"
                id="_book">
        <h1>Tất cả Sách</h1>
        <ai-list-of-books api="/api/book" />
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'b-page',
    components: {
        ...components('list-of-books'),
        ...components('contain')
    },
    data() {
        return {
            books: []
        };
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/'],
            ['Sách', '/']
        ];
        // const self = this;
        // axios
        //     .get('/api/book')
        //     .then((response) => {
        //         self.books = response.data;
        //     });
    }
};
</script>