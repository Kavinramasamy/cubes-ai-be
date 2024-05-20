import "dotenv/config.js";
import { AdminModel } from "../../helper/mongoose_schema.js";
import { encrypt } from "../../helper/encrypt_decrypt.js";

const AdminSignUp = async (req, res) => {
  try {
    const { admin_email, admin_password } = req.body;

    // Check Admin is present or not
    const admin = await AdminModel.findOne({ admin_email });

    // Admin already exists
    if (admin) {
      return res
        .status(400)
        .json({ message: "Admin Already Exists", status: false });
    }

    // Password Encryption
    const hashedPassword = await encrypt(admin_password);

    // Adding new Admin
    const new_admin = await AdminModel({
      admin_email,
      admin_password: hashedPassword,
    }).save();

    return res
      .status(201)
      .json({ message: "Registration complete", status: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false, error });
  }
};

export default AdminSignUp;
