<template>
    <div id="app">
        <div class="row">
            <div class="col">
                1 of 2
            </div>
            <div class="col">
                2 of 2
            </div>
        </div>
        <div class="row">
            <div class="col">
                1 of 3
            </div>
            <div class="col">
                2 of 3
            </div>
            <div class="col">
                3 of 3
            </div>
        </div>
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