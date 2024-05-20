const CheckToken = async (req, res) => {
  return res.status(200).json({ message: "Valid Token", status: true });
};
export default CheckToken;
