<template>
    <div class="book row hasShadow">
        <router-link class="image-link"
                     :to="'/book/' + info.id">
            <ai-image :src="info.image" />
        </router-link>
        <div class="col">
            <div class="col hasShadow">
                <h4 class="title bold">
                    {{ info.title }}
                </h4>
                <div class="author">
                    {{ info.author }}
                </div>
                <p class="full description scroll">
                    {{ info.description }}
                </p>
                <ai-row class="book-button hasShadow"
                        size="35">
                    <ai-button path="#router.push"
                               value="/to"
                               text="Xem thêm" />
                    <!-- <ai-button icon="" /> -->
                </ai-row>
            </div>
            <ai-line class="light" />
            <ai-row size="20"
                    class="hasShadow">
                <ai-button class="tag"
                           text="Giả tưởng" />
            </ai-row>
        </div>
    </div>
</template>
<script>
import {
    components,
    style
} from 'modules';
export default {
    name: 'book',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('item')
    },
    props: ['info'],
    data() {
        return {

        };
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            // '.book[size="#{$size}"]': [
            //     'width: #{$size}px'
            // ]
        }
    },
    mounted() {
        style.set(this, {
            height: style.get('size', this, 40)
        });
    }
};
</script>
<style lang="scss">
$size: 20px;
$image-size: 200px;
.book {
    flex: 1;
    margin: 40px 10px 10px 10px;
    min-width: $image-size * 1.5;
    max-width: $image-size * 1.9;
    position: relative;
    >.image-link {
        display: block;
        position: absolute;
        top: $size * -1;
        left: $size;
        height: $image-size;
        width: $image-size / 8 * 5;
        border-radius: 3px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
        overflow: hidden;
        >.image {
            width: 100%;
            height: 100%;
        }
    }
    >.col {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        overflow: hidden!important;
        background: white;
        flex: 1;
        >.col:nth-child(1) {
            margin-left: $image-size / 8 * 5 + $size * 2;
            padding: $size $size $size 0;
            height: $image-size - $size * 2;
            >.author {
                color: #666;
                font-size: 0.8em;
            }
            >.description {
                margin: 0.5em 0;
                font-size: 0.8em;
                line-height: 1.2em;
                color: #666;
            }
            >.book-button {
                >.button {
                    // padding: 0 5px;
                    color: white;
                    border-radius: 30px;
                    &:nth-child(1) {
                        padding: 0 5px;
                        background-color: rgba(#2ecc71, 1.0);
                        box-shadow: 0 0 8px rgba(#2ecc71, 0.5);
                    }
                    &:nth-child(2) {
                        margin-left: 10px;
                        background-color: rgba(#E67E22, 1.0);
                        box-shadow: 0 0 8px rgba(#E67E22, 0.5);
                    }
                }
            }
        }
        >.row:nth-child(3) {
            margin: $size/2 $size;
            >.tag {
                background-color: #3498db;
                box-shadow: 0 0 10px rgba(#3498db, 0.5);
                color: white;
                border-radius: 20px;
                padding: 0 0.25em;
            }
        }
    }
}

.book-enter,
.book-leave-to {
    opacity: 0;
    transform: scale(0);
}

.book-enter-to {
    opacity: 1;
    transform: scale(1);
}

.book-move {
    opacity: 1;
    transition: all 0.5s;
}
</style>