<template>
    <ai-contain class="row">

        <ai-line class="dark hidden-sm-down" />
        
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
        ...components('item')
    }
};
</script>