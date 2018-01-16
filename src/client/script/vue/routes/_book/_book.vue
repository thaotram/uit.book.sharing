<template>
    <div class="col"
         id="book">
        <ai-contain class="full nav">
            <ai-navigator :left="left"
                          :right="right" />
        </ai-contain>
        <ai-contain class="full"
                    id="_book">
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
        ...components('navigator'),
        ...components('contain'),
        ...components('ui')
    },
    data: () => ({
        ...data('book'),
        left: [
            ['Trang chủ', '/'],
            ['Sách', '/Book']
        ],
        right: []
    }),
    created() {
        this.$parent.links = [
            ['Trang chủ', '/'],
            ['Sách', '/Book']
        ];
    }
};
</script>
<style lang="scss">
.nav>div {
    padding: 10px;
}
</style>