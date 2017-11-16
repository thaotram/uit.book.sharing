<template>
    <div class="row user hasShadow">
        <ai-image size="30"
                  class="round"
                  link="/user/1"
                  :src="user.picture.thumbnail" />
        <ai-space size="10" />
        <ai-label class="full"
                  :text="user.name.last" />
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'user',
    props: ['user'],
    components: {
        ...components('container'),
        ...components('units')
    }
};
</script>

<style scoped>
</style>