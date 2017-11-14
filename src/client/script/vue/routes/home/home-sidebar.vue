<template>
    <div id="sidebar"
         class="col hasShadow">
        <ai-space size="40" />
        <h6>Thành viên tích cực</h6>
        <ai-list-of-users/>
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
    color: #999; // background: blueviolet;
}
</style>