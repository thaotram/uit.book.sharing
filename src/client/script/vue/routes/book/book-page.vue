<template>
    <ai-contain class="col full">
        <ai-book-header/>
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'book-page',
    components: {
        ...components('routes/book'),
        ...components('contain')
    }
};
</script>