<template>
    <ai-book-small :book="book"
                   class="book-small-keep"
                   size="24">
        <ai-row class="hasShadow">
            <ai-tag text="Chủ sách"
                    class="crescent" />
            <ai-user :user="user" />
        </ai-row>
        <ai-row class="hasShadow">
            <ai-tag text="Đã mượn trong"
                    class="crescent" />
            <ai-tag :text="`${random(1, 15)} ngày`" />
        </ai-row>
        <ai-row class="hasShadow">
            <ai-tag text="Còn lại"
                    class="crescent" />
            <ai-tag :text="`${random(1, 15)} ngày`" />
        </ai-row>
    </ai-book-small>
</template>
<script>
import {
    components,
    user
} from 'modules';
export default {
    name: 'BookSmallKeep',
    components: {
        ...components('items/book-small'),
        ...components('container'),
        ...components('user'),
        ...components('text'),
        ...components('tag')
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            user: {
                name: {
                    last: 'Tên',
                    first: 'Họ'
                },
                picture: {}
            }
        };
    },
    mounted() {
        user(data => this.user = data);
    },
    methods: {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    },
};
</script>
<style lang="scss"></style>