<template>
    <div class="col book-page">
        <ai-contain class="col full hasShadow">
            <ai-book-header/>
        </ai-contain>
    </div>
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
<style lang="scss">
.book-page {
    padding: 20px 0;
}
</style>