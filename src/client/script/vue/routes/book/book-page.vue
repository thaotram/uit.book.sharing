<template>
    <ai-contain class="row">
        
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'bookPage',
    components: {
        ...components('contain'),
        ...components('units'),
        ...components('item')
    }
};
</script>