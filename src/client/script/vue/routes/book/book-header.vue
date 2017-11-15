<template>
    <ai-row class="book-header">
        <ai-image src="https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409" />
    </ai-row>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'book-header',
    components: {
        ...components('contain'),
        ...components('unit')
    }
};
</script>
<style lang="scss">
.book-header {
    > .image {
        height: 50px;
        width:900px;
    }
}
</style>