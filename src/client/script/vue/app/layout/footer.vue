<template>
    <ai-contain id="footer">
        <div class="row">
            <div>
                <p class="bold">Lớp Giao tiếp người máy - SE215.I11</p>
                <p>Nhóm 12</p>
                <p>+ 15520649 Phạm Hồng Phúc</p>
                <p>+ 15520325 Nguyễn Thị Ngọc Huyền</p>
                <p>+ 14520927 Dương Hoài Thương</p>
                <p>+ 14520724 Hồ Hoàng Quân</p>
            </div>
        </div>
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
    margin-top: 15px;
    font-size: 0.9em;
    >.row {
        padding: 20px 10px;
    }
}
</style>