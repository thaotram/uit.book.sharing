<template>
    <div class="row user">
        <ai-image class="round avatar"
                  :src="user.picture.thumbnail" />
        <span class="name"> {{ user.name.first }} {{ user.name.last }} </span>
    </div>
</template>

<script>
import {
    components,
    style
} from 'modules';

export default {
    name: 'User',
    components: {
        ...components('container'),
        ...components('units')
    },
    props: {
        user: {
            type: Object,
            default: () => ({
                name: {},
                picture: {}
            })
        }
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .user': [
                'border-radius: #{$size}px'
            ],
            '[size="#{$size}"] .user>.avatar': [
                'margin: #{$size * 0.1}px;'
            ],
            '[size="#{$size}"] .user>.name': [
                'font-size: #{$size * 0.3 + 5}px;',
                'line-height: #{$size * 1.2}px;',
                'margin: 0 #{$size * 0.5}px 0 #{$size * 0.2}px;'
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
.user {
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    >.name {
        display: block;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: capitalize;
        white-space: nowrap;
    }
}
</style>