import path from 'path';

export default function(app) {
    app.get('/', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, '../../../dist/client/index.html')
        );
    });
    app.get('/api/book/get/:id', (req, res) => {
        res.json({
            id: req.params.id,
            title: 'Harry Potter',
            author: 'J. K. Rowling',
            description: 'Harry Potter là tên của bộ truyện (gồm bảy phần) của nữ nhà văn nước Anh J. K. Rowling. Bộ truyện viết về những cuộc phiêu lưu phù thủy của cậu bé Harry Potter và những người bạn Ronald Weasley, Hermione Granger, lấy bối cảnh tại Trường Phù thủy và Pháp sư Hogwarts nước Anh. Những cuộc phiêu lưu tập trung vào cuộc chiến của Harry Potter trong việc chống lại tên Chúa tể hắc ám Voldemort - người có tham vọng muốn trở nên bất tử, thống trị thế giới phù thủy, nô dịch hóa những người phi pháp thuật và tiêu diệt những ai cản đường hắn đặc biệt là Harry Potter.' ,
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        });
    });
    app.get('*', (req, res) => {
        res.status(404).send('Not Found');
    });
}