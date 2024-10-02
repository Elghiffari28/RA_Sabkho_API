import multer from "multer";
import path from "path";

const storageFotoGuru = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageFotoKarya = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/karya/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageFotoNews = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/news/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  if (extname) {
    cb(null, true);
  } else {
    cb(new Error("Hanya bisa upload beresktensi gambar"));
  }
};

const uploadFotoGuru = multer({
  storage: storageFotoGuru,
  fileFilter: fileFilter,
  limits: { fileSize: 5000000 },
});
const uploadFotoKarya = multer({
  storage: storageFotoKarya,
  fileFilter: fileFilter,
});
const uploadFotoNews = multer({
  storage: storageFotoNews,
  fileFilter: fileFilter,
});

export { uploadFotoGuru, uploadFotoKarya, uploadFotoNews };
