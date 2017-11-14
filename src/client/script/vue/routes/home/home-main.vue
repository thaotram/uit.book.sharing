<template>
    <div id="home-main"
         class="full">
        <ai-list-of-books/>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'home-main',
    components: {
        ...components('list-of-items')
    }
};
</script>

<style lang="scss">
#home-main {
    padding: 20px 0 20px 20px;
}
</style>