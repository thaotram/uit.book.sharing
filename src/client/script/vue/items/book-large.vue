<template>
    <ai-row class="book-large hasShadow">
        <router-link class="image-link"
                     :to="'/Sách/' + computedBook.id">
            <ai-image class="shadow"
                      :src="computedBook.image" />
        </router-link>
        <ai-row class="full content">
            <ai-line class="dark" />
            <ai-col class="full">
                <ai-row class="box title-author">
                    <ai-col class="full">
                        <h1 bold>
                            <router-link to="/" class="title">
                                {{ computedBook.title }}
                            </router-link>
                        </h1>
                        <h6>
                            <router-link to="/">
                                {{ computedBook.author }}
                            </router-link>
                        </h6>
                    </ai-col>
                </ai-row>
                <ai-line class="dark" />
                <div class="box scroll">
                    <span bold>Tóm lược:</span> {{ computedBook.description }}
                </div>
            </ai-col>
        </ai-row>
    </ai-row>
</template>

<script>
// import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'book-large',
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
            // axios
            //     .get(this.api)
            //     .then((response) => {
            //         self.dataBook = response.data;
            //     });
            this.dataBook = {
                id: 1,
                title: 'Harry Potter',
                author: 'J. K. Rowling',
                description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.',
                image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
            };
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