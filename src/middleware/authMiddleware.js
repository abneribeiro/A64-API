const jwt = require('jsonwebtoken');

const createAuthMiddleware = (jwt) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token missing' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Token invalid' });
      req.userId = decoded.userId;
      next();
    });
  };
};

module.exports = createAuthMiddleware(jwt);