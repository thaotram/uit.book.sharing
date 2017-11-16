<template>
    <ai-contain id="footer"
                childClass="row">
        <p class="bold">Lớp Giao tiếp người máy - SE215.I11</p>
        <p>Nhóm 12</p>
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'template',
    components: {
        ...components('contain'),
        ...components('items')
    }
};
</script>
<style lang="scss">
#footer {
    background-color: rgba(#000, 0.1);
    margin-top: 30px;
    font-size: 0.9em;
    >.row {
        padding: 20px 10px;
    }
}
</style>