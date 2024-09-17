import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Ambil header Authorization
  const authHeader = req.headers["authorization"];

  // Pisahkan token dari header Authorization
  const token = authHeader && authHeader.split(" ")[1];

  // Jika tidak ada token, kirimkan status 401 (Unauthorized)
  if (token == null)
    return res.status(401).json({ message: "Token not found" });

  // Verifikasi token menggunakan secret key
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      // Jika token tidak valid, kirimkan status 403 (Forbidden)
      return res.status(403).json({ message: "Invalid token" });
    }

    // Simpan data decoded ke dalam req untuk digunakan di request berikutnya
    req.email = decoded.email;

    // Panggil next untuk melanjutkan ke middleware atau route berikutnya
    next();
  });
};

export default verifyToken;
