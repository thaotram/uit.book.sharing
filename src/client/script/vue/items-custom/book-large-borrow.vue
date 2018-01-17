<template>
    <ai-row class="book-manager hasShadow">
        <router-link class="image-link"
                     :to="'/book/' + book.title">
            <ai-image class="shadow"
                      :src="book.image" />
        </router-link>
        <ai-button icon=""
                   class="top-right-icon noHover" />
        <ai-row class="full content">
            <ai-line class="dark" />
            <ai-col class="full content-right">
                <div class="title-author">
                    <router-link to="/"
                                 class="title">
                        {{ book.title }}
                    </router-link>
                    <router-link to="/"
                                 class="author">
                        {{ book.author }}
                    </router-link>
                </div>
                <ai-row class="tags hasShadow"
                        size="30">
                    <ai-button v-for="tag in book.tags"
                               :key="tag"
                               :text="tag" />
                </ai-row>
                <ai-line class="dark" />
                <div class="detail col"
                     size="30">
                    <ai-text>
                        <ai-user :user="user"
                                 style="display: inline-flex" />
                        <span> đang mượn quyển sách này, dự kiến trả trong </span>
                        <ai-tag :text="`${random(1, 15)} ngày`" />
                        <span> nữa. </span>
                    </ai-text>
                    <ai-text>
                        <span> Quyển sách này từng được cho mượn</span>
                        <ai-tag :text="`${random(1, 8)} lần`" />
                        <span>.</span>
                    </ai-text>
                </div>
            </ai-col>
        </ai-row>
    </ai-row>
</template>
<script>
import {
    components
} from 'modules';
import axios from 'axios';
export default {
    name: 'BookManager',
    components: {
        ...components('container'),
        ...components('units'),
        ...components('user'),
        ...components('text'),
        ...components('tag')
    },
    props: {
        book: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            user: {
                name: {},
                picture: {}
            }
        };
    },
    mounted() {
        const self = this;
        axios.get('https://randomuser.me/api/', {
            params: {
                inc: 'name,picture',
                gender: 'female',
                results: 1
            }
        }).then(function(response) {
            self.user = response.data.results[0];
        });
    },
    methods: {
        random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    }
};
</script>
<style lang="scss">
$size: 20px;
$image-size: 300px;
$red: #ff4d4d;
$green: #2ecc71;
$blue: #3498db;
.book-manager {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(black, 0.2);
    height: $image-size;
    margin: ($size + 10px) 10px 10px 10px;
    position: relative;
    >.top-right-icon {
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 10px;
        font-size: 30px;
        color: rgba($red, 0.8);
        text-shadow: 0 0 0px rgba($red, 0);
        transition: all 0.2s;
        cursor: pointer;
        * {
            overflow: visible;
        }
        &:hover {
            text-shadow: 0 0 15px rgba($red, 0.5);
        }
    }
    >.image-link {
        box-shadow: 0 0 20px rgba(black, 0.4);
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
        >.content-right {
            >.title-author {
                padding: 25px 20px 0 20px;
                font-weight: bold;
                .title,
                .author {
                    display: block;
                    &:hover {
                        text-decoration: none;
                    }
                }
                .title {
                    font-size: 1.5em;
                    line-height: 1.2em;
                    color: rgba(black, 0.9);
                }
                .author {
                    font-size: 1.1em;
                    color: rgba(black, 0.6);
                }
            }
            >.tags {
                padding: $size * 0.75 $size;
                margin: 0 -0.25em;
                >div {
                    background-color: #3498db;
                    box-shadow: 0 0 10px rgba(#3498db, 0.5);
                    color: white;
                    border-radius: 20px;
                    padding: 0 0.25em;
                    margin: 0 0.25em;
                }
            }
            >.detail {
                padding: $size * 0.75 $size;
                margin: 0 -0.25em;
                .user {
                    background: $green;
                    box-shadow: 0 0 10px rgba($green, 0.5);
                    color: rgba(white, 0.9);
                }
            }
        }
    }
}
</style>