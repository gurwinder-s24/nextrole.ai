import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Unauthorized: No Bearer token provided" });
            return;
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized: Token value is missing" });
            return;
        }
        const decodedPayload = jwt.verify(token, process.env.JWT_SEC);
        if (!decodedPayload || !decodedPayload.user) {
            res.status(401).json({ message: "Unauthorized: Invalid token provided" });
            return;
        }
        const user = await User.findById(decodedPayload.user._id);
        if (!user) {
            res.status(401).json({ message: "expired token" });
            return;
        }
        req.user = decodedPayload.user;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Please login - Jwt error" });
    }
};
