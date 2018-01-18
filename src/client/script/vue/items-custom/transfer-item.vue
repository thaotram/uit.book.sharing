<template>
    <div class="transfer-item">
        đã cho
    </div>
</template>
<script>
import {
    components,
    user
} from 'modules';
export default {
    name: 'TransferItem',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('ui'),
        ...components('items'),
        ...components('items-custom')
    },
};
</script>
<style lang="scss">
.transfer-item {
    padding-left: 10px;
}
</style>