<template>
    <div id="body"
         class="full"
         :class="{hasScroll: isScroll}">
        <router-view></router-view>
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
        ...components('container')
    },
    data() {
        return {
            isScroll: false
        };
    },
    updated() {
        this.isScroll = this.$el.scrollHeight > this.$el.offsetHeight;
    },
    mounted() {
        this.isScroll = this.$el.scrollHeight > this.$el.offsetHeight;
    }
};
</script>
<style lang="scss">
#body {
    overflow: auto;
    >.contain {
        min-height: 100%;
    }
    &.hasScroll>.contain {
        padding-right: calc(50px - 12px);
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