<template>
    <transition-group name="book"
                      tag="div"
                      class="col"> -->
        <ai-book-manager v-for="(book, index) in books"
                         :book="book"
                         :key="index" />
    </transition-group>
</template>
<script>
import {
    components
} from 'modules';
export default {
    components: {
        ...components('items/book-manager')
    },
    props: {
        books: {
            type: Array,
            default: () => []
        }
    }
};
</script>