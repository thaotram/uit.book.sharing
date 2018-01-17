<template>
    <div class="col"
         id="book">
        <ai-contain class="full"
                    id="_book">
            <ai-section text="Đã chia sẻ" />
            <ai-book-manager class="full"
                             :book="books[0]" />
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
        ...components('ui'),
        ...components('items')
    },
    data: () => ({
        ...data('book')
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Quản lý sách', '/manager']
        ];
        this.$parent.right = [
            // ['Văn học Việt nam', '/'],
            // ['Văn học nước ngoài', '/Book']
        ];
    }
};
</script>