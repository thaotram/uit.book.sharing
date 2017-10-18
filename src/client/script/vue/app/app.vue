<template>
    <div id="app">
        <ai-header/>
    </div>
</template>
<script>
import {
    components
} from 'modules';

export default {
    name: 'app',
    components: {
        ...components('header')
    },
    mounted() {
        // console.clear();
    }
};
</script>
<style lang="scss">
#app {
    position: absolute;
    height: 100%;
    width: 100%;
    min-width: 300px;
}
</style>