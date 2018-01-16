<template>
    <div class="full">
        <ai-section text="Ngẫu nhiên" />
        <ai-contain class="full">
            <ai-book :book="book" />
        </ai-contain>
        <ai-section text="Sách đang chia sẻ" />
        <ai-contain class="full"
                    child-class="row">
            <ai-list-of-books :books="books" />
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
        ...components('list-of-books'),
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
        this.book = state.book.books[
            Math.floor(Math.random() * state.book.books.length)
        ];
    }
};
</script>