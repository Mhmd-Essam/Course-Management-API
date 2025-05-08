const exprees = require("express");
const {
  allCourses,
  addCourse,
  getcourse,
  updateCourse,
  deleteCourse,
} = require("./../controllers/courseController");
const upload = require('./../middlewares/upload');
const router = exprees.Router();

router.route("/").get(allCourses);
router.route("/").post(upload.single('image'),addCourse);
router.route("/:id").get(getcourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
