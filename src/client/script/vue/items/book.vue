<template>
    <ai-contain class="hasShadow"
                child-class="row flex-wrap">
        <ai-book-large :book="book"
                       class="hidden-sm-down" />
        <ai-book-small :book="book"
                       class="hidden-md-up" />
    </ai-contain>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'Book',
    components: {
        ...components('contain'),
        ...components('items')
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
        }
    }
};
</script>