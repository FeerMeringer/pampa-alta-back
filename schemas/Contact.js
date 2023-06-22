import Joi from "joi-oid";

 const schema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(3)
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
    })
  
});
export default schema;