<template>
    <ai-book-large :book="book"/>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'book-page',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('items/book-large')
    },
    data() {
        return {
            book: {}
        };
    },
    created() {
        const self = this;
        axios
            .get('/api/book/' + this.$route.params.id)
            .then((response) => {
                self.book = response.data;
                self.$parent.links = [
                    ['Trang chủ', '/'],
                    ['Sách', '/Sách'],
                    [self.book.title, '/Sách/' + this.book.id]
                ];
            });
    }
};
</script>
<style lang="scss">
$size: 30px;
$image-size: 400px;
.book-header {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    height: $image-size;
    margin-top: $size * 1.5;
    position: relative;
    .box {
        padding: $size * 0.5;
    }
    >.image {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        height: $image-size;
        left: $size;
        position: absolute;
        top: -$size;
        width: $image-size / 8 * 5;
    }
    >.content {
        margin-left: $image-size / 8 * 5 + $size * 2;
    }
}
</style>