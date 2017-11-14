<template>
    <div class="full"
         id="main">
    </div>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'main',
    components: {
        ...components('contain'),
        ...components('item'),
        ...components('layout')
    }
};
</script>
<style lang="scss">
#main {
    padding: 0 0 0 20px;
}
</style>