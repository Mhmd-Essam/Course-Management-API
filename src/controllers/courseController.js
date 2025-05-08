const asyncHandler = require("express-async-handler");
const Course = require("./../models/courseModel");
const {
  Createcoursevalidation,
  updatecoursevalidation,
} = require("./../validation/courseValidation");

exports.allCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  if (courses.length === 0) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
  res.status(200).json({
    length: courses.length,
    coursesDetails: courses,
  });
});

exports.getcourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({
      message: "this course Not found check the id",
    });
  }
  res.status(200).json({
    data: course,
  });
});

exports.addCourse = asyncHandler(async (req, res, next) => {
  const { error } = Createcoursevalidation(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const image = req.file ? req.file.filename : 'default.png';
  const { title, description, startDate, endDate, price } = req.body;

  if (!title || !price || !description) {
    return res.status(401).json({
      message: " please enter title and price and description ",
    });
  }

  const newCourse = await Course.create({
    title,
    description,
    startDate,
    endDate,
    price,
    image
  });

  res.status(201).json({
    message: "the course is created successfully",
    courseDetails: newCourse,
  });
});

exports.updateCourse = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "No data provided for update",
    });
  }

  const { error } = updatecoursevalidation(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({
      message: "this course Not found check the id",
    });
  }

  const updatedcourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({
    message: "the course is updated successfuly",
    updatedcourse,
  });
});

exports.deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({
      message: "this course Not found check the id",
    });
  }

  await Course.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "the course is deleted",
  });
});
