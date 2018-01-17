<template>
    <div class="row user hasShadow">
        <ai-image class="round avatar"
                  :src="user.picture.thumbnail" />
        <p class="name"> {{ user.name.last }} </p>
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
            '[size="#{$size}"] .user>.name': [
                'line-height: #{$size}px;',
                'font-size: #{$size * 0.6}px;'
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
    margin: 5px;
    padding: 3px;
    >.name {
        margin: 0 10px;
        flex: 1;
        font-weight: bold;
    }
}
</style>