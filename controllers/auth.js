const User = require('../models/user.js');
const bcyrpt = require('bcrypt');

exports.register = async (req, res) => {
    const newUser = new User(
        {
            userName: req.body.user,
            email: req.body.email,
            password: await bcyrpt.hash(req.body.password, (saltOrRounds = 10))
        }
    );
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (e) {
        res.status(500).json(e);
    }

};


