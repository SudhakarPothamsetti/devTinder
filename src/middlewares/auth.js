const adminAuth = (req, res, next) => {
  const token = "admin new";
  if (token !== "admin") res.status(401).send("Un Authorized");
  else next();
};
const userAuth = (req, res, next) => {
  const token = "user new";
  if (token !== "user") res.status(401).send("Un Authorized");
  else next();
};

module.exports = { adminAuth, userAuth };
