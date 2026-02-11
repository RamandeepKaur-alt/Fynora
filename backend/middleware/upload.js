import multer from "multer";

// Use memory storage so files are not written to disk
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
});

