exports.userBoard = (req, res) => {
  res.status(200).json("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).json("Admin Content.");
};

exports.imageboard = (req, res) => {
  try {

    if (!req.file) {
      res.status(400).json('upload image only')
    }

    res.status(200).json("Image Upload successful");

  } catch (e) {
    res.status(404).json({ message: e })
  }



};


