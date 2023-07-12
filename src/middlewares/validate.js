const BAD_REQUEST = 400;

const validate = async (req, res, next) => {
  if (!req.body) {
    return res.status(BAD_REQUEST).json({
      message: '"name" is required',
    });
  }
  return next();
};

module.exports = {
  validate,
};