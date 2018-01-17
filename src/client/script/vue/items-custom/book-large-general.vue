<template>
    <ai-book-large :book="book"
                   class="book-large-general"
                   size="30">
        <ai-list-row-wrap class="hasShadow">
            <ai-row class="hasShadow"
                    green>
                <ai-tag text="Đang giữ sách"
                        class="crescent" />
                <ai-tag :text="`${random(1, 15)} người`" />
            </ai-row>
            <ai-row class="hasShadow"
                    orange>
                <ai-tag text="Đang mượn"
                        class="crescent" />
                <ai-tag :text="`${random(1, 15)} người`" />
            </ai-row>
            <ai-row class="hasShadow"
                    violet>
                <ai-tag text="Có nhu cầu mượn"
                        class="crescent" />
                <ai-tag :text="`${random(1, 15)} người`" />
            </ai-row>
        </ai-list-row-wrap>
    </ai-book-large>
</template>
<script>
import {
    components,
    user
} from 'modules';
export default {
    name: 'BookLargeGeneral',
    components: {
        ...components('items/book-large'),
        ...components('list-of-items'),
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
    data: () => ({
        user: user()
    }),
    methods: {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    },
};
</script>
<style lang="scss">
.book-large-general .detail {
    >* {
        margin-bottom: 10px;
    }
    .row.flex-wrap {
        justify-content: flex-start;
        >* {
            margin: 0.3em;
        }
    }
}
</style>