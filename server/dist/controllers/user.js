import axios from "axios";
import { oauth2client } from "../config/googleConfig.js";
import TryCatch from "../middlewares/trycatch.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const loginUser = TryCatch(async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ message: "Authorization code is required" });
    }
    const googleResponse = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleResponse.tokens);
    const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`);
    const { email, name, picture } = userInfoResponse.data;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({ email, name, image: picture });
    }
    const token = jwt.sign({ user }, process.env.JWT_SEC, {
        expiresIn: "15d",
    });
    res.json({
        message: "Logged in successfully",
        token,
        user,
    });
});
export const myProfile = TryCatch(async (req, res) => {
    res.json(req.user);
});
