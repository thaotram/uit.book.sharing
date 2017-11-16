<template>
    <div id="home-main"
         class="full">
        <ai-list-of-books api="/api/book" />
    </div>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'home-main',
    components: {
        ...components('list-of-items'),
        ...components('units')
    }
};
</script>

<style lang="scss">
#home-main {
    padding: 20px 0;
}
</style>