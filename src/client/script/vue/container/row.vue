<template>
    <div class="row">
        <slot/>
    </div>
</template>
<script>
import {
    style
} from 'modules';
export default {
    name: 'row',
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '.row[size="#{$size}"]': [
                'min-height: #{$size}px'
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