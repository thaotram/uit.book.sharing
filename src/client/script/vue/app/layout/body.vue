<template>
    <div id="body"
         class="full"
         :class="{hasScroll: isScroll}">
        <transition name="body-fade">
            <router-view></router-view>
        </transition>
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
</style>