<template>
    <ai-contain class="section-header">
        <router-link :to="to">
            {{ text }}
        </router-link>
    </ai-contain>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'header',
    props: {
        to: {
            default: '/'
        },
        text: {
            default: 'Text'
        }
    },
    components: {
        ...components('contain')
    }
};
</script>

<style lang="scss">
.section-header {
    font-size: 1.3em;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: rgba(#3498db, 0.3);
    >a {
        padding: 0 10px;
    }
}
</style>