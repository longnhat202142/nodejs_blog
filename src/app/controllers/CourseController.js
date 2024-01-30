const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    // GET / courses /:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // GET / courses /create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] / courses /store
    store(req, res, next) {
        const formData = req.body;
        formData.image = 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139e2ba0f350.png';

        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    // [GET] / courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[ PUT] / courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[ DELETE] / courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[ PATCH] / courses/:id/restore
    restore(req, res, next) {
        const { id } = req.params;
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[ POST] / courses/handle-form-actions
    handleFormActions(req, res, next) {
<<<<<<< HEAD
        console.log(req.body.action);
=======
>>>>>>> a54d42cf9994ce43833569cb39eb15a471f52980
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invaild' });
<<<<<<< HEAD

                break;
=======
>>>>>>> a54d42cf9994ce43833569cb39eb15a471f52980
        }
    }
}

module.exports = new CourseController();
