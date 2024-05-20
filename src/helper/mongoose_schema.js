import mongoose from "mongoose";

const AdminSchema = await mongoose.Schema({
  admin_email: {
    type: String,
    default: "",
  },
  admin_password: {
    type: String,
    default: "",
  },
});
const UserLoginEventSchema = await mongoose.Schema({
  user_name: {
    type: String,
    default: "",
  },
  device_id: {
    type: String,
    default: "",
  },
  device_name: {
    type: String,
    default: "",
  },
  meeting_id: {
    type: String,
    default: "",
  },
  date_time: {
    type: String,
    default: "",
  },
});
const UserSiteEventSchema = await mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  device_name: {
    type: String,
    required: true,
  },
  meeting_id: {
    type: String,
    required: true,
  },
  site_name: {
    type: String,
    required: true,
  },
  date_time: {
    type: String,
    default: "",
  },
});

const MeetingSchema = await mongoose.Schema({
  meeting_id: {
    type: String,
    required: true,
  },
  meeting_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user_emails: {
    type: Array,
    required: true,
    default: [],
  },
  date_time: {
    type: String,
    required: true,
  },
  meeting_video: {
    type: String,
    required: true,
    default: "NA",
  },
});
const MeetingIDSchema = await mongoose.Schema({
  meeting_id: {
    type: String,
    required: true,
  },
  user_names: {
    type: Array,
    default: [],
  },
});
const SiteSchema = await mongoose.Schema({
  site_name: {
    type: String,
    required: true,
  },
});

export const AdminModel = mongoose.model("admin", AdminSchema);
export const MeetingModel = mongoose.model("meeting", MeetingSchema);
export const MeetingIDModel = mongoose.model("meetingid", MeetingIDSchema);
export const SiteModel = mongoose.model("site", SiteSchema);
export const UserLoginEventModel = mongoose.model(
  "userlogin",
  UserLoginEventSchema
);
export const UserSiteEventModel = mongoose.model(
  "sitevisit",
  UserSiteEventSchema
);
