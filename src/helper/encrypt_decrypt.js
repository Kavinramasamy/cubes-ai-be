import bcrypt from "bcrypt";

async function encrypt(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
export { encrypt };

async function decrypt(password, hashedPassword) {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
}
export { decrypt };
