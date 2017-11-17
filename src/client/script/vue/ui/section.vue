<template>
    <ai-contain class="section">
        <router-link :to="to"
                     class="text"
                     v-if="to">
            {{ text }}
        </router-link>
        <p v-if="!to && text"
           class="text">{{ text }}</p>
        <p v-if="this.$slots.default"
           class="slot">
            <slot/>
        </p>
    </ai-contain>
</template>
<script>
import {
    components
} from 'modules';
export default {
    name: 'section',
    props: {
        to: {
            default: undefined
        },
        text: {
            default: undefined
        }
    },
    components: {
        ...components('contain')
    }
};
</script>

<style lang="scss">
.section>* {
    >.text {
        font-size: 1.3em;
        padding-top: 25px;
        padding-bottom: 10px;
        display: block;
    }
    >* {
        color: black;
        overflow: visible;
        padding: 0 10px;
    }
}
</style>