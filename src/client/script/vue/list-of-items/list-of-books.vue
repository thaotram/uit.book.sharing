<template>
    <transition-group name="book"
                      tag="div"
                      class="row flex-wrap">
        <ai-book v-for="(book, index) in books"
                 :info="book"
                 :key="index" />
    </transition-group>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'list-of-books',
    data() {
        return {
            books: [{
                id: 1,
                title: 'Harry Potter',
                author: 'J. K. Rowling',
                description: 'Harry Potter và Hòn đá Phù thủy là cuốn đầu trong loạt tiểu thuyết Harry Potter 13123  123 123 12 312 312 3123 123 123 123 12 3123 123 123 12 3123 12  3123 123 ',
                image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
            }, {
                id: 2,
                title: 'Harry Potter',
                author: 'J. K. Rowling',
                description: 'Harry Potter và Hòn đá Phù thủy là cuốn đầu trong loạt tiểu thuyết Harry Potter',
                image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
            }]
        };
    },
    components: {
        ...components('book')
    }
};
</script>