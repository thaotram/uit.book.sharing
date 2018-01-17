<template>
    <ai-row/>
</template>

<script>
// import axios from 'axios';
import {
    components,
    user
} from 'modules';
import state from '../../../state';

export default {
    name: 'BookPage',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('ui'),
        ...components('items'),
        ...components('items-custom')
    },
    data: () => ({
        user: user()
    }),
    created() {
        this.$parent.left = [
            ['Trang chủ', '/'],
            ['Người dùng', '/user'],
            [`${this.user.name.first} ${this.user.name.last}`, '/user/' + this.$route.params.id]
        ];
        this.$parent.right = [];
    },
};
</script>
<style lang="scss">
.button-row>*>* {
    margin: 5px;
    >.row {
        $opacity: 0.3;
        $color-1: #3498db;
        $color-2: #2ecc71;
        $color-3: #e67e22;
        margin: 5px;
        border-radius: 4px;
        &:nth-child(1) {
            box-shadow: 0 0 5px rgba($color-1, 0.5);
            background-color: $color-1;
        }
        &:nth-child(2) {
            box-shadow: 0 0 5px rgba($color-2, 0.5);
            background-color: $color-2;
        }
        &:nth-child(3) {
            box-shadow: 0 0 5px rgba($color-3, 0.5);
            background-color: $color-3;
        }
    }
    .button {
        color: white;
    }
}
</style>