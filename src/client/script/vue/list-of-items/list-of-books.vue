<template>
    <transition-group name="book"
                      tag="div"
                      class="row flex-wrap"> -->
        <ai-book v-for="(book, index) in books"
                    :info="book"
                    :key="index" />
    </transition-group>
</template>
<script>
// import book from '../items/thebook.vue';
import {
    components
} from 'modules';
export default {
    name: 'list-of-books',
    components: {
        ...components('items/book')
    },
    props: {
        books: {
            default: () => ({})
        }
    }
};
</script>