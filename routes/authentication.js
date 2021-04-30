const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');
const path = require('path');
const checkLogin = require('../middlewares/checkLogin');
const router = express.Router();


router.post('/register', async (req, res) => {
    const { password } = req.body;
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({ ...req.body, password: hashedPassword });
        const savedUser = await user.save();
        res.json({ msg: "Registration Success!" });
    }
    catch (err) {
        console.error(err);
        res.json({ msg: "Registration Failed!" });
    }
})

router.post('/auth',checkLogin, async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        const secretKey = await fs.readFile(__dirname + '/../jwt/private.key');
        if (!user) return res.json({ msg: "Authentication failed!" });
        const isValidPassword = bcrypt.compare(password, user.password);

        const jsonToken = jwt.sign({
            username: user.username,
            userId: user._id
        }, secretKey, { expiresIn: '2 days' });

        res.json({
            accessToken: jsonToken,
            msg: "Login Successful!"
        });

    }
    catch (err) {
        console.log(err);
        res.json({ msg: "Authentication Failure!" });
    }
})

router.delete('/user/:username',checkLogin,async (req, res) => {
    try {
        await User.deleteOne({username:username});
    }
    catch (err) {
        console.error(err);
        res.json({ msg: 'user does not exist' });
    }
})


module.exports = router;