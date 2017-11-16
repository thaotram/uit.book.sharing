<template>
    <div class="col full">
        <ai-section to="/Sách" text="Tất cả sách"/>
        <ai-contain class="full"
                    id="_book">
            <ai-list-of-books api="/api/book" />
        </ai-contain>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'b-page',
    components: {
        ...components('list-of-books'),
        ...components('contain'),
        ...components('ui')
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/'],
            ['Sách', '/Sách']
        ];
    }
};
</script>
<style lang="scss">

</style>