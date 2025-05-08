const Joi = require("joi");

function Createcoursevalidation(obj) {
  const Schema = Joi.object({
    title: Joi.string().required().min(3).trim().messages({
      "any.required": "please enter the title ",
      "string.min": "the min length is 3 char",
    }),

    description: Joi.string().required().min(20).max(150).trim().messages({
      "any.required": "please enter the description",
      "string.min": "the min length is 20 char",
      "string.max": "the max length is 150",
    }),

    price: Joi.number().required().messages({
      "any.required": "please enter the price",
    }),
    image: Joi.string().pattern(
        /^data:image\/(png|jpeg|jpg);base64,|^https?:\/\/.+/
      ).messages({
        'string.pattern.base': 'Image must be a valid base64 string or URL'
      }).optional(),
    startDate: Joi.date().optional(),
    endDate: Joi.date().optional()
  });

  return Schema.validate(obj);
}
function updatecoursevalidation(obj) {
  const Schema = Joi.object({
    title: Joi.string().min(3).trim().messages({
      "string.min": "the min length is 3 char",
    }),

    description: Joi.string().min(20).max(150).trim().messages({
      "string.min": "the min length is 20 char",
      "string.max": "the max length is 150",
    }),

    price: Joi.number(), image: Joi.string().pattern(
        /^data:image\/(png|jpeg|jpg);base64,|^https?:\/\/.+/
      ).messages({
        'string.pattern.base': 'Image must be a valid base64 string or URL'
      }).optional(),
      startDate: Joi.date().optional(),
      endDate: Joi.date().optional()
  });

  return Schema.validate(obj);
}

module.exports = { Createcoursevalidation, updatecoursevalidation };
