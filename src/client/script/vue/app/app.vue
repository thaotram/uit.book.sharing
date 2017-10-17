<template>
    <div id="app" class="col">
        <ai-header/>
        <div style="height: 20px; background: #f2f5f7"></div>
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