<template>
    <ai-contain id="footer"
                child-class="row">
        <ai-col class="full">
            <p>Nhóm 12</p>
            <p>Lớp Giao tiếp người máy - SE215.I11</p>
        </ai-col>
        <ai-row>
            <router-link to="/">Trang chủ</router-link>
            <router-link to="/Thông_tin">Thông tin</router-link>
        </ai-row>
    </ai-contain>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'Footer',
    components: {
        ...components('container'),
        ...components('items')
    }
};
</script>
<style lang="scss">
#footer {
    background-color: rgba(#34495e, 0.5);
    margin-top: 30px;
    font-size: 0.9em;
    >.row {
        padding: 20px 10px;
    }
    * {
        color: #fff;
    }
    a {
        font-weight: bold;
        margin-left: 10px;
        &:hover {
            color: #333;
            text-decoration: none;
        }
    }
}
</style>