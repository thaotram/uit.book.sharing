<template>
    <ai-contain class="col full hasShadow">
        <ai-row class="book-header hasShadow">
            <ai-image class="shadow"
                      :src="info.image" />
            <ai-row class="full content">
                <ai-line class="dark" />
                <ai-col class="full">
                    <ai-row class="box">
                        <ai-col class="full">
                            <h1 class="bold">{{ info.title }}</h1>
                            <h6>
                            <router-link to="/">
                                {{ info.author }}
                            </router-link>
                        </h6>
                        </ai-col>
                        <ai-col>
                            <span class="icon">
                            
                        </span>
                        </ai-col>
                    </ai-row>
                    <ai-line class="dark" />
                    <div class="box scroll">
                        <span class="bold">Tóm lược:</span> {{ info.description }}
                    </div>
                </ai-col>
            </ai-row>
        </ai-row>
    </ai-contain>
</template>

<script>
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'book-page',
    components: {
        ...components('container'),
        ...components('units')
    },
    data() {
        return {
            info: {}
        };
    },
    created() {
        const self = this;
        axios
            .get('/api/book/' + this.$route.params.id)
            .then((response) => {
                self.info = response.data;
                self.$parent.links = [
                    ['Trang chủ', '/'],
                    ['Sách', '/Sách'],
                    [self.info.title, '/Sách/' + this.info.id]
                ];
            });
    }
};
</script>
<style lang="scss">
$size: 30px;
$image-size: 400px;
.book-header {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    height: $image-size;
    margin-top: $size * 1.5;
    position: relative;
    .box {
        padding: $size * 0.5;
    }
    >.image {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        height: $image-size;
        left: $size;
        position: absolute;
        top: -$size;
        width: $image-size / 8 * 5;
    }
    >.content {
        margin-left: $image-size / 8 * 5 + $size * 2;
    }
}
</style>