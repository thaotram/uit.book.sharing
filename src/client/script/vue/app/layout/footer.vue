<template>
    <ai-contain id="footer">
        <div class="row">
123123
        </div>
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'template',
    components: {
        ...components('contain'),
        ...components('items')
    }
};
</script>
<style lang="scss">
#footer {
    height: 200px;
    background-color: rgba(#3498db, 0.3);
    margin-top: 15px;
    > * {
        padding: 0 10px;
    }
}
</style>