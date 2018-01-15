<template>
    <ai-row class="book-large hasShadow">
        <router-link class="image-link"
                     :to="'/Sách/' + book.id">
            <ai-image class="shadow"
                      :src="book.image" />
        </router-link>
        <ai-row class="full content">
            <ai-line class="dark" />
            <ai-col class="full">
                <ai-row class="box title-author">
                    <ai-col class="full">
                        <h1 bold>
                            <router-link to="/" 
                                         class="title">
                                {{ book.title }}
                            </router-link>
                        </h1>
                        <h6>
                            <router-link to="/">
                                {{ book.author }}
                            </router-link>
                        </h6>
                    </ai-col>
                </ai-row>
                <ai-line class="dark" />
                <div class="box scroll">
                    <span bold>Tóm lược:</span> {{ book.description }}
                </div>
            </ai-col>
        </ai-row>
    </ai-row>
</template>

<script>
import {
    components
} from 'modules';
export default {
    name: 'BookLarge',
    components: {
        ...components('container'),
        ...components('units')
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
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
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    height: $image-size;
    margin: $size+10px 10px 10px 10px;
    position: relative;
    .box {
        padding: $size * 0.5;
    }
    .title {
        color: black;
        &:hover {
            color: #3498db;
            text-decoration: none;
        }
    }
    .title-author {
        min-height: 60px;
    }
    >.image-link {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        height: $image-size;
        left: $size;
        position: absolute;
        top: -$size;
        width: $image-size / 8 * 5;
        >.image {
            width: 100%;
            height: 100%;
        }
    }
    >.content {
        margin-left: $image-size / 8 * 5 + $size * 2;
    }
}
</style>