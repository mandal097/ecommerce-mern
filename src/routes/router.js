const router = require("express").Router();

const apiRoute = require("./apis/api");

router.use('/api', apiRoute);


module.exports = router;