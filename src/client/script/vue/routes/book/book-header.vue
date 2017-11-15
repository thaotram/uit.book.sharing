<template>
    <ai-row class="book-header">
        <ai-image src="https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409" />
        <div class="full"></div>
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
$image-size: 400px;
.book-header {
    margin: 30px 0;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    >.image {
        height: $image-size;
        width: $image-size / 8 * 5;
    }
}
</style>