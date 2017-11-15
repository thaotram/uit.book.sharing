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
            description: 'Harry Potter và Hòn đá Phù thủy là cuốn đầu trong loạt tiểu thuyết Harry Potter',
            image: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409'
        });
    });
    app.get('*', (req, res) => {
        res.status(404).send('Not Found');
    });
}