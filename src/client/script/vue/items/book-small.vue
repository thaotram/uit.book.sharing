<template>
    <div class="book row hasShadow">
        <router-link class="image-link"
                     :to="'/Sách/' + computedBook.id">
            <ai-image :src="computedBook.image" />
        </router-link>
        <div class="col">
            <div class="col hasShadow">
                <div class="row"
                     size="60">
                    <div class="col full">
                        <h4 class="title bold">
                            {{ computedBook.title }}
                        </h4>
                        <div class="author">
                            {{ computedBook.author }}
                        </div>
                    </div>
                </div>
                <p class="full description scroll">
                    {{ computedBook.description }}
                </p>
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
import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'book-small',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('items')
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
$size: 20px;
$image-size: 200px;
.book {
    flex: 1;
    margin: 30px 10px 10px 10px;
    min-width: $image-size * 1.8;
    max-width: $image-size * 2.3;
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
            >.description {
                margin: 0.5em 0;
                font-size: 0.9em;
                line-height: 1.3em;
                color: #222;
            }
            >.book-button {
                >.button {
                    // padding: 0 5px;
                    color: white;
                    border-radius: 30px;
                    &:after {
                        content: "";
                        width: 100%;
                        position: absolute;
                        height: 100%;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                    }
                    &:nth-child(1) {
                        // &:hover {
                        //     background-color: rgba(#000, 0.9);
                        // }
                        padding: 0 5px;
                        background-color: #2ecc71;
                        box-shadow: 0 0 8px rgba(#2ecc71, 0.5);
                        &:hover:after {
                            background-color: rgba(#000, 0.4)
                        }
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