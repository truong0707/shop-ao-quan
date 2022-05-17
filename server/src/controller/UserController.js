const User = require('../models/UserModel');
const { generateToken } = require('../utils/generateToken.js');

// user login
let postUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id:   user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:  generateToken(user._id),
            createAt: user.createAt,
        }) // dữ liệu trả về
    } else {
        res.status(401) 
        throw new Error("Thông tin không đúng!")
    }
}

// profile
const getProfile = async (req, res) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
        })
    } else {
        res.status(404);
        throw new Error("not found user!");
    }
} 


// register
const postRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const userExits = await User.findOne({ email });

    if (userExits) {
        res.status(400)
        throw new Error("User already exists!");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400)
        throw new Error("Invalid User Data!");
    }
} 




module.exports = {
    postUser,
    getProfile,
    postRegister,
}