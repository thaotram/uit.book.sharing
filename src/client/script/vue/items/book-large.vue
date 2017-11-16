<template>
    <ai-contain class="col full hasShadow">
        <ai-row class="book-large hasShadow">
            <ai-image class="shadow"
                      :src="computedBook.image" />
            <ai-row class="full content">
                <ai-line class="dark" />
                <ai-col class="full">
                    <ai-row class="box">
                        <ai-col class="full">
                            <h1 class="bold">{{ computedBook.title }}</h1>
                            <h6>
                            <router-link to="/">
                                {{ computedBook.author }}
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
                        <span class="bold">Tóm lược:</span> {{ computedBook.description }}
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
    computed: {
        computedBook() {
            return this.dataBook || this.book;
        }
    },
    data() {
        return {
            dataBook: undefined
        };
    },
    props: {
        book: {
            default: () => ({})
        },
        api: {
            default: undefined
        }
    },
    mounted() {
        const self = this;
        if (this.api !== undefined) {
            axios
                .get(this.api)
                .then((response) => {
                    self.dataBook = response.data;
                });
        }
    }
};
</script>
<style lang="scss">
$size: 30px;
$image-size: 400px;
.book-large {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    height: $image-size;
    margin: $size * 1.5 0 $size * 0.5 0;
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