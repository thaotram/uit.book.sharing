<template>
    <div class="col"
         id="book">
        <ai-contain class="full"
                    id="_book">
            <ai-section text="Tất cả sách" />
            <ai-list-of-books-small :books="books" />
        </ai-contain>
    </div>
</template>

<script>
import {
    components,
    data
} from 'modules';
export default {
    components: {
        ...components('line'),
        ...components('list-of-books-small'),
        ...components('contain'),
        ...components('ui')
    },
    data: () => ({
        ...data('book')
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Sách', '/book']
        ];
        this.$parent.right = [
            // ['Văn học Việt nam', '/'],
            // ['Văn học nước ngoài', '/book']
        ];
    }
};
</script>