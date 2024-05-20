import jwt from "jsonwebtoken";
import {} from "dotenv/config.js";

export default async function generateAdminToken(value) {
  const token = jwt.sign({ id: value }, process.env.SECRET_KEY_ADMIN, {
    expiresIn: "1d",
  });
  return token;
}
