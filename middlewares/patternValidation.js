const joi = require('joi');

const patternValidation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        const { username, password, email } = req.body;

        if (!username && !password && !email) {
            return res.status(400).json({ message: "Username, password, and email are required" });
        }

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};

const schema = joi.object({
    username: joi.string()
        .min(3)
        .max(30)
        .required(),

    password: joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
}
)


module.exports = { patternValidation, schema }