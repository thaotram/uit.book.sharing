<template>
    <div class="col"
         id="book">
        <ai-contain class="full"
                    id="_book">
            <ai-section text="Tổng hợp" />
            <ai-list-of-books :books="books" />
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
        ...components('list-of-books'),
        ...components('contain'),
        ...components('ui')
    },
    data: () => ({
        ...data('book')
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Sách', '/Book']
        ];
        this.$parent.right = [
            // ['Văn học Việt nam', '/'],
            // ['Văn học nước ngoài', '/Book']
        ];
    }
};
</script>