<template>
    <div class="full">
        <ai-section text="Ngẫu nhiên" />
        <ai-book api="/api/book/1" />
        <ai-section to="/Book"
                    text="Tất cả sách" />
        <ai-contain>
            <ai-list-of-books/>
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'HomePage',
    components: {
        ...components('contain'),
        ...components('units'),
        ...components('items/book'),
        ...components('items/book-large'),
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