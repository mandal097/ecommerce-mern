const router = require("express").Router();

router.get("", (req, res) => {
    return res.json({
        status: "success",
        message: "you are in test route"
    })
})

module.exports = router;