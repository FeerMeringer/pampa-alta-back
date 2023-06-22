import Joi from "joi-oid";

 const schema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(2)
    .max(20)
    .messages({
    "string.min": "The name must have at least 3 characteres",
    "string.max": "The name must have a maximum of 20 characteres",
  }),
  email: Joi
    .string()
    .required()
    .min(8)
    .email({ minDomainSegments: 2 })
    .messages({
    invalid: "Not an objets",
    }),
    message: Joi
    .string()
    .required()
    .min(5)
    .max(50)
    .messages({
      "string.min": "The name must have at least 5 characteres",
      "string.max": "The name must have a maximum of 50 characteres",
    }),
    subject: Joi 
    .string()
    .required() 
  
});
export default schema;