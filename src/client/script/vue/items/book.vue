<template>
    <ai-contain class="hasShadow"
                childClass="row flex-wrap">
        <ai-book-large :api="api"
                       :book="book"
                       class="hidden-sm-down" />
        <ai-book-small :api="api"
                       :book="book"
                       class="hidden-md-up" />
    </ai-contain>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'book',
    props: ['api', 'book'],
    components: {
        ...components('contain'),
        ...components('items/book-small'),
        ...components('items/book-large')
    }
};
</script>