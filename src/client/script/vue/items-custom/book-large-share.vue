<template>
    <ai-book-large :book="book"
                   class="book-large-share"
                   size="24">
        <ai-row class="hasShadow">
            <ai-tag text="Người cho mượn"
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
    </ai-book-large>
</template>
<script>
import {
    components,
    user
} from 'modules';
export default {
    name: 'BookLargeShare',
    components: {
        ...components('items/book-large'),
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