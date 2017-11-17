<template>
    <div id="body"
         class="">
        <ai-contain class="navigator">
            <ai-nav :links="links" />
        </ai-contain>
        <ai-line class="dark"/>
        <router-view ref="view"
                     id="view" />
        <ai-footer/>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'body',
    components: {
        ...components('layout/footer'),
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
        margin: 20px auto;
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

.bold, [bold] {
    font-weight: 700;
}

</style>