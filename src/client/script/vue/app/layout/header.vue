<template>
    <div id="header" class="row">
        <ai-row>
            ok
        </ai-row>
    </div>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'header',
    components: {
        ...components('row')
    }
};
</script>
<style scoped>
.find {
    display: flex;
    line-height: 50px;
    height: 50px;
    vertical-align: middle;
    font-size: 20px;
    color: #868f98
}
</style>