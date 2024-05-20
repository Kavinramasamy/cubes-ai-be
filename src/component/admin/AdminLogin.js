import "dotenv/config.js";
import generateAdminToken from "../../helper/generate_admin_token.js";
import { AdminModel } from "../../helper/mongoose_schema.js";
import { decrypt } from "../../helper/encrypt_decrypt.js";

const AdminLogIn = async (req, res) => {
  try {
    const { admin_email, admin_password } = req.body;

    // Check Admin is present or not
    const admin = await AdminModel.findOne({ admin_email });

    // Admin not exist
    if (!admin) {
      return res.status(401).json({ message: "Unauthorized", status: false });
    }

    // Password Decryption
    const pass = await decrypt(admin_password, admin.admin_password);

    // Password Validation
    if (!pass) {
      return res.status(401).json({ message: "Unauthorized", status: false });
    }
    const token = await generateAdminToken(admin_email);

    // Response
    return res.status(201).json({
      message: "Login Success",
      status: true,
      token,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false, error });
  }
};

export default AdminLogIn;
