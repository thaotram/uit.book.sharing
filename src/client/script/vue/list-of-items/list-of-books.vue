<template>
    <transition-group name="book"
                      tag="div"
                      class="row flex-wrap"> -->
        <ai-book-small v-for="(book, index) in books"
                       :book="book"
                       :key="index" />
    </transition-group>
</template>
<script>
// import axios from 'axios';
import {
    components
} from 'modules';
export default {
    name: 'list-of-books',
    components: {
        ...components('items/book-small')
    },
    data() {
        return {
            books: []
        };
    },
    props: {
        api: {
            default: '/api/book'
        }
    },
    created() {
        // const self = this;
        // axios
        //     .get(this.api)
        //     .then((response) => {
        //         self.books = response.data;
        //     });
        this.books = [{
            id: 1,
            title: 'Harry Potter 1',
            author: 'J. K. Rowling',
            description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.',
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        }, {
            id: 1,
            title: 'Harry Potter 1',
            author: 'J. K. Rowling',
            description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.',
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        }, {
            id: 1,
            title: 'Harry Potter 1',
            author: 'J. K. Rowling',
            description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.',
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        }, {
            id: 1,
            title: 'Harry Potter 1',
            author: 'J. K. Rowling',
            description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.',
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        }, {
            id: 2,
            title: 'Harry Potter 2',
            author: 'J. K. Rowling',
            description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.',
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        }];
    }
};
</script>