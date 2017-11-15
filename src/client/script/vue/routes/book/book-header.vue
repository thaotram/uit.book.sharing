<template>
    <ai-row class="book-header flex-wrap">
        <ai-image class="shadow"
                  :key="'book-image-' + info.id"
                  :src="info.image" />
        <ai-col class="right shadow full">
            <ai-col class="box">
                <h1 style="font-weight: bold">{{ info.title }}</h1>
                <h5>
                    <span style="font-weight: bold">
                        Tác giả: 
                    </span>
                    <router-link to="/">
                        {{ info.author }}
                    </router-link>
                </h5>
            </ai-col>
            <ai-line class="dark" />
            <ai-col class="box">
                <h6>{{ info.description }}</h6>
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
    margin: 30px 0; // background-color: #fff;
    border-radius: 4px;
    overflow: visible;
    .shadow {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
        >.box {
            padding: 15px;
        }
    }
}
</style>