<template>
    <div class="row user hasShadow">
        <ai-image size="30"
                  class="round avatar"
                  link="/user/1"
                  :src="user.picture.thumbnail" />
        <p class="name"> {{ user.name.last }} </p>
    </div>
</template>

<script>
import {
    components
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
            default: () => ({})
        }
    },
};
</script>

<style lang="scss">
.user {
    background: white;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin: 5px;
    padding: 3px;
    >.avatar {
        margin-right: 10px;
    }
    >.name {
        flex: 1;
        font-size: 0.9em;
        font-weight: bold;
        line-height: 30px;
    }
}
</style>