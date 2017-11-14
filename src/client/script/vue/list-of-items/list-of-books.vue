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
    name: 'list-of-books',
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