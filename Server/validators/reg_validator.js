const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .max(255, { message: "Name must not be more than 255 characters" }),
  rollNo: z
    .string({ required_error: "Roll Number is required" })
    .trim()
    .min(5, { message: "Roll Number must be of at least 7 characters" })
    .max(12, { message: "Roll Number must not be more than 12 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of at least  10 characters" })
    .max(20, { message: "Phone must not be more than 15 characters" }),
  branch: z
    .string({ required_error: "Branch is required" })
});

module.exports = signupSchema; 