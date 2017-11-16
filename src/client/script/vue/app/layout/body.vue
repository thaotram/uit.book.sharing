<template>
    <div id="body"
         class="full col">
        <ai-contain class="navigator">
            <ai-nav :links="links"/>
        </ai-contain>
        <router-view ref="view"
                     id="view" />
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'body',
    components: {
        ...components('layout'),
        ...components('line'),
        ...components('nav'),
        ...components('container')
    },
    data() {
        return {
            links: []
        };
    }
};
</script>
<style lang="scss">
#body {
    overflow: auto;
    >.navigator {
        margin: 20px 0;
    }
}

// vue transition
.body-fade-enter-active,
.body-fade-leave-active {
    transition: all 0.5s !important;
}

.body-fade-enter,
.body-fade-leave-to {
    opacity: 0;
}

.bold {
    font-weight: bold;
}
</style>