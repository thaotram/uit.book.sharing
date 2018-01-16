<template>
    <div class="col">
        <ai-section to="/book"
                    text="Tất cả sách" />
        <ai-contain class="full"
                    id="_book">
            <ai-list-of-books :books="books" />
        </ai-contain>
    </div>
</template>

<script>
import {
    components,
    computed
} from 'modules';

export default {
    components: {
        ...components('list-of-books'),
        ...components('contain'),
        ...components('ui')
    },
    computed: {
        ...computed('book')
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/'],
            ['Sách', '/Sách']
        ];
        this.books = [

        ];
    }
};
</script>
<style lang="scss">
</style>