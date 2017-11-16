<template>
    <ai-contain class="section">
        <router-link :to="to" v-if="to">
            {{ text }}
        </router-link>
        <p v-else>{{ text }}</p>
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
            default: undefined
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
.section {
    font-size: 1.3em;
    padding-top: 25px;
    padding-bottom: 10px;
    >*>* {
        color: black;
        overflow: visible;
        padding: 0 10px;
    }
}
</style>