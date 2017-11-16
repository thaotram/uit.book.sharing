<template>
    <div id="sidebar"
         class="col hasShadow">
        <ai-space size="40" />
        <router-link to="123">
            Thông tin
        </router-link>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'home-sidebar',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('list-of-items')
    }
};
</script>
<style lang="scss">
#sidebar {
    width: 200px;
}
</style>