const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // GET / news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
                next(err);
            });
    }

    //Get /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
