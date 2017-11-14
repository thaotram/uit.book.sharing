<template>
    <div id="home-main"
         class="full">
        <ai-list-of-book/>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'home-main',
    components: {
        ...components('routes/home/list')
    }
};
</script>

<style lang="scss">
#home-main {
    padding-left: 20px;
}
</style>