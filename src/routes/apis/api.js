const router = require("express").Router();

router.get("/test", (req, res) => {
    return res.json({
        status: "success",
        message: "you are in test api baseroute"
    })
})

module.exports = router;