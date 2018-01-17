import axios from 'axios';

module.exports = function(callback) {
    axios.get('https://randomuser.me/api/', {
        params: {
            inc: 'name,picture',
            gender: 'female',
            results: 1
        }
    }).then((response) => {
        callback(response.data.results[0]);
    }).catch(() => console.log('Lỗi kết nối, không thể lấy thông tin user'));
};