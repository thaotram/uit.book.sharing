<template>
    <router-link class="image"
                 :to="link"
                 :style="srcStyle" />
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
        },
        link: {
            type: String,
            required: false,
            default: '/'
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .image': [
                'height: #{$size}px',
                'width:  #{$size}px'
            ],
            '.image[size="#{$size}"]': [
                'height: #{$size}px',
                'width:  #{$size}px'
            ]
        }
    },
    computed: {
        srcStyle: function() {
            return {
                backgroundImage: `url(${this.src})`
            };
        }
    },
    mounted() {
        style.set(this, {
            size: style.get('size', this, 40)
        });
    }
};
</script>