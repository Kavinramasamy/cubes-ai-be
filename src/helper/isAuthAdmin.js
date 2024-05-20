import jwt from "jsonwebtoken";
import {} from "dotenv/config.js";

const isAuthAdmin = async (req, res, next) => {
  if (req.headers) {
    try {
      let token = (await req.headers["x-auth-token"]) || "";

      if (!token) {
        return res
          .status(400)
          .json({ message: "Access denied...", status: false });
      }
      const decode = jwt.verify(token, process.env.SECRET_KEY_ADMIN);
      if (decode) {
        next();
      }
    } catch (error) {
      console.log("error.............", error);
      return res.status(500).json({ message: "Can't authenticate", error });
    }
  }
};

export { isAuthAdmin };
