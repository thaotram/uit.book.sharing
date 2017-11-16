<template>
    <div class="col book-page">
        <ai-contain class="col full hasShadow">
            <ai-nav :links="links" />
            <ai-book-header :info="info"/>
        </ai-contain>
    </div>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'book-page',
    components: {
        ...components('routes/book'),
        ...components('contain'),
        ...components('units')
    },
    data() {
        return {
            info: {}
        };
    },
    computed: {
        links: function() {
            return [
                ['Trang chủ', '/'],
                ['Sách', '/book'],
                [this.info.title, '/book/' + this.info.id]
            ];
        }
    },
    created() {
        const self = this;
        axios
            .get('/api/book/get/' + this.$route.params.id)
            .then((response) => {
                self.info = response.data;
            });
    }
};
</script>
<style lang="scss">
.book-page {
    padding: 20px 0;
}
</style>