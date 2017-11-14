<template>
    <transition-group name="book"
                      tag="div"
                      class="row flex-wrap">
        <ai-book v-for="item in items"
                 :what="item"
                 :key="item" />
    </transition-group>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'list-of-book',
    data() {
        return {
            items: [1, 1, 1, 3, 4, 5]
        };
    },
    components: {
        ...components('item')
    }
};
</script>

<style lang="scss">
.book {
    transition: all 0.5s;
}

.book-enter,
.book-leave-to
/* .book-leave-active for <2.1.8 */

{
    opacity: 0;
    transform: scale(0);
}

.book-enter-to {
    opacity: 1;
    transform: scale(1);
}

.book-move {
    opacity: 1;
    transition: all 0.5s;
}
</style>