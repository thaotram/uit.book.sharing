<template>
    <span class="text hasShadow">
        <slot/>
    </span>
</template>

<script>
import {
    style
} from 'modules';

export default {
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .text': [
                'line-height: #{$size + 4}px;',
                'font-size: #{$size * 0.3 + 5}px;',
            ]
        }
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40)
        });
    }
};
</script>
<style lang="scss"
       scoped>
.text {
    display: block;
    >* {
        vertical-align: -webkit-baseline-middle;
    }
}
</style>