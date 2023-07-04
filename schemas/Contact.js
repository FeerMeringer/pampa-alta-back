import Joi from "joi-oid";

const schema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .max(20)
    .messages({
      "string.min": "The name must have at least 3 characters",
      "string.max": "The name must have a maximum of 20 characters",
  }),
  email: Joi.string()
    .required()
    .min(8)
    .email({ minDomainSegments: 2 })
    .messages({
      invalid: "Not an object",
  }),
  message: Joi.string()
    .required()
    .messages({
      "any.required": "Message is required",
  }),
  subject: Joi.string()
    .required()
    .messages({
      "any.required": "Subject is required",
  }),
});

export default schema;
