const authDB = require('../model/auth-model')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const signup = async (req, res) => {
    try {
        const { email, password, fullName } = req.body
        const userExist = await authDB.findOne({ email })
        if (userExist) {
            return res.status(400).json({ msg: "user already Exist ...please Login" });
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const result = await authDB.create({ email, password: hashpassword, fullName });
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });

            return res.status(400).send(errors);
        }
        res.status(500).send("Something went wrong");
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await authDB.findOne({ email })
        if (!user) {
            return res.status(200).json({
                msg: 'Invalid Cradantial', user: false
            })
        }
        let isMatchpass = await bcrypt.compare(password, user.password)
        if (!isMatchpass) {
            return res.json({
                msg: 'Invalid Cradantial',
                user: false
            })
        }
        let token = await JWT.sign({ email }, 'secret_key')
        res.json({ token })

    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
            return res.status(400).send(errors);
        }
        res.status(500).send("Something went wrong");
    }
}
module.exports = { signup, login }