import jwt from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
  try {
    const res = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    req.user = res._id;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
