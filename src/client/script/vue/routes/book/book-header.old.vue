<template>
    <ai-row class="book-header flex-wrap">
        <ai-image class="shadow"
                  :key="'book-image-' + info.id"
                  :src="info.image" />
        <ai-col class="right shadow full">
            <ai-col class="box">
                <h1 class="bold">{{ info.title }}</h1>
                <h6>
                    <span class="bold">
                        Tác giả: 
                    </span>
                    <router-link to="/">
                        {{ info.author }}
                    </router-link>
                </h6>
            </ai-col>
            <ai-line class="dark" />
            <ai-col class="box">
                <span class="bold">
                    Tóm lược:
                </span>
                <p>{{ info.description }}</p>
            </ai-col>
        </ai-col>
    </ai-row>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'book-header',
    data() {
        return {
            info: {}
        };
    },
    created() {
        const self = this;
        axios
            .get('/api/book/get/' + this.$route.params.id)
            .then((response) => {
                self.info = response.data;
            });
    },
    components: {
        ...components('contain'),
        ...components('unit')
    }
};
</script>
<style lang="scss">
$image-size: 400px;
.book-header {
    border-radius: 4px;
    .shadow {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .box {
        padding: 15px;
    }
    >* {
        margin: 10px
    }
    >.image {
        border-radius: 4px;
        height: $image-size;
        width: $image-size / 8 * 5;
    }
    >.right {
        border-radius: 4px;
        background: #fff;
        min-width: 60%;
    }
}
</style>