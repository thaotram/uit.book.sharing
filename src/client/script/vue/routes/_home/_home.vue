<template>
    <div class="full">
        <ai-section-header to="/Sách"
                           text="Ngẫu nhiên" />
        <ai-book-large api="/api/book/1" />
        <ai-section-header to="/Sách"
                           text="Tất cả sách" />
        <ai-contain class="row flex-wrap">
            <ai-list-of-books api="/api/book" />
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'home-page',
    components: {
        ...components('contain'),
        ...components('units'),
        ...components('items'),
        ...components('ui'),
        ...components('list-of-books')
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/']
        ];
    }
};
</script>