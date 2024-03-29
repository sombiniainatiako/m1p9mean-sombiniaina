const jwt = require('express-jwt');
const secret  = require('./secret.helper');

module.exports = authorize;

function authorize(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    console.log("authorize entered");
    return [
        jwt({ secret, algorithms: ['HS256'] }),
        (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            next();
        }
    ];
}