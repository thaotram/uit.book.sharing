<template>
    <div id="header"
         class="row"
         size="50">
        <ai-contain child-class="row">
            <router-link to="/"
                         class="full"
                         id="logo">
                <ai-label text="Chia sẻ sách" />
            </router-link>
            <div id="search-box"
                 class="row"
                 size="30">
                <ai-input class="search"
                          placeholder="Tìm kiếm" />
            </div>
            <ai-col class="square">
                <ai-image size="30"
                          class="round"
                          link="user/me"
                          src="https://graph.facebook.com/ai.scanlation/picture?width=200" />
            </ai-col>
        </ai-contain>
    </div>
</template>
<script>
import {
    components
} from 'modules';

export default {
    name: 'Header',
    components: {
        ...components('container'),
        ...components('units')
    }
};
</script>
<style lang="scss">
#header {
    color: #666;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
    #logo {
        cursor: pointer;
        &:hover {
            text-decoration: none;
        }
        .label {
            cursor: pointer;
        }
        .text {
            font-family: 'Pacifico', cursive;
            font-size: 1.2em;
            flex: 1;
            text-align: left;
        }
    }
    #search-box {
        align-self: center;
        border-radius: 30px;
        border: 1px solid #95a5a6;
        input {
            padding: 0 15px;
        }
    }
}
</style>