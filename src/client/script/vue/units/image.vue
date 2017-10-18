<template>
    <img class="image"
         :src="this.src">
</template>
<script>
import {
    style
} from 'modules';
export default {
    name: 'image',
    props: {
        src: {
            type: String,
            required: true,
            default: '#'
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] img.image': [
                'height: #{$size * $dpi}px',
                'width:  #{$size * $dpi}px'
            ]
        }
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40),
            dpi: window.devicePixelRatio
        });
        // debugger;
    }
};
</script>
<style>
img {
    background: red;
}
</style>