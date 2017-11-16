<template>
    <div id="sidebar"
         class="col hasShadow">
        <router-link to="/Sách"> Sách </router-link>
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
    font-size: 1.2em;
}
</style>