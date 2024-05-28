import jwt from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Invalid Token",
        });
      } else {
        req.body.userId = decode._id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
