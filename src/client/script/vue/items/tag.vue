<template>
    <span class="tag hasShadow">{{ text }}</span>
</template>

<script>
import {
    style
} from 'modules';

export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .tag': [
                'border-radius: #{$size}px',
                'padding: #{$size * 0.1}px #{$size * 0.4}px;',
                'line-height: #{$size + 4}px;',
                'height: #{$size}px;',
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

<style lang="scss">
.tag {
    background-color: #3498db;
    box-shadow: 0 0 10px rgba(#3498db, 0.5);
    color: white;
    border-radius: 20px;
    padding: 0 0.25em;
    margin: 0 0.25em;
}
</style>