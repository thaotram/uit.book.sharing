<template>
    <ai-contain class="row full">
        <ai-home-sidebar class="hidden-sm-down" />
        <ai-line class="dark hidden-sm-down" />
        <ai-space size="20"
                  class="hidden-sm-down" />
        <ai-home-main/>
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'home-page',
    components: {
        ...components('contain'),
        ...components('units'),
        ...components('routes/_home')
    },
    created() {
        this.$parent.links = [
            ['Trang chủ', '/']
        ];
    }
};
</script>