<template>
    <div class="full">
        <ai-section text="Ngẫu nhiên" />
        <ai-contain class="full">
            <ai-book-large :book="book" />
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';
import state from '../../../state';
export default {
    name: 'HomePage',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('items'),
        ...components('ui'),
    },
    data: () => ({
        book: {}
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/']
        ];
        this.$parent.right = [
            ['Sách', '/book'],
            ['Quản lý sách', '/book'],
        ];
        this.book = state.book.books[1];
    }
};
</script>