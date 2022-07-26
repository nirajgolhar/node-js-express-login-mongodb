const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

const multer = require('multer')
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, './app/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  },
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype == 'image/png'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: fileStorageEngine,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.post("/api/test/imageupload", [authJwt.verifyToken, authJwt.isAdmin,], upload.single('image'), controller.imageboard);

  app.get("/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
