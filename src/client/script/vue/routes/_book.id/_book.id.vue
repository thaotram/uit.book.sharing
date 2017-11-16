<template>
    <div>
        <ai-book :book="book" />
        <ai-section text="Có thể mượn" />
        <ai-contain childClass="col hasShadow borrow-1">
            <table>
                <tr>
                    <td>Chủ sách</td>
                    <td>Địa chỉ</td>
                    <td>Yêu cầu</td>
                    <td>Có thể cho mượn trong</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                </tr>
            </table>
        </ai-contain>
        <ai-section text="Có nhu cầu mượn" />
        <ai-contain childClass="col hasShadow borrow-2">
            <table>
                <tr>
                    <td>Người muốn mượn sách</td>
                    <td>Địa chỉ</td>
                    <td>Dự kiến trả trong</td>
                </tr>
                <tr>
                    <td>Phạm Hồng Phúc</td>
                    <td>123</td>
                    <td>123</td>
                </tr>
            </table>
        </ai-contain>
        <ai-section text="Đang mượn" />
        <ai-contain childClass="col hasShadow borrow-3">
            <table>
                <tr>
                    <td>Chủ sách</td>
                    <td>Người mượn</td>
                    <td>Địa chỉ</td>
                    <td>Dự kiến trả trong</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                </tr>
            </table>
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
        ...components('container'),
        ...components('units'),
        ...components('ui'),
        ...components('routes/_book.id'),
        ...components('items/book')
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