<template>
    <div class="full">
        <ai-contain>
            <ai-section text="Ngẫu nhiên" />
        </ai-contain>
        <ai-contain class="full hasShadow"
                    child-class="row flex-wrap">
            <ai-book-large class="hidden-sm-down full"
                           :book="book" />
            <ai-book-small class="hidden-md-up"
                           :book="book" />
        </ai-contain>
        <ai-contain class="full"
                    child-class="row">
            <div class="col books full">
                <ai-section text="Ngẫu nhiên" />
                <ai-list-of-books :books="books" />
            </div>
            <div class="space" />
            <div class="col users hasShadow">
                <ai-section text="Thành viên tích cực" />
                <ai-list-of-users />
            </div>
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
        ...components('list-of-users'),
        ...components('container'),
        ...components('units'),
        ...components('items'),
        ...components('ui'),
    },
    data: () => ({
        book: state.book.books[
            Math.floor(Math.random() * state.book.books.length)
        ],
        books: state.book.books.filter(() => true)
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/']
        ];
        this.$parent.right = [
            ['Sách', '/book'],
            ['Quản lý sách', '/book'],
            ['Chia sẻ sách', '/share'],
        ];
    }
};
</script>
<style lang="scss"
       scoped>
.space {
    width: 10px;
}

.users {
    width: 200px;
}
</style>