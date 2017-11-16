<template>
    <div id="home-main"
         class="full">
        <ai-nav :links="links" />
        <ai-list-of-books/>
    </div>
</template>

<script>
import {
    components
} from 'modules';

export default {
    name: 'home-main',
    data() {
        return {
            links: [
                ['Trang chủ', '/'],
                ['Sách', '/book']
            ]
        };
    },
    components: {
        ...components('list-of-items'),
        ...components('units')
    }
};
</script>

<style lang="scss">
#home-main {
    padding: 20px 0;
}
</style>