import express from "express";
import AdminLogIn from "../component/admin/AdminLogin.js";
import AdminSignUp from "../component/admin/AdminSignUp.js";
import { isAuthAdmin } from "../helper/isAuthAdmin.js";
import CheckToken from "../component/admin/token_validation.js";

const admin_route = express.Router();

admin_route.post("/login", AdminLogIn);
admin_route.post("/signup", AdminSignUp);
admin_route.get("/valid-token", isAuthAdmin, CheckToken);

export default admin_route;
