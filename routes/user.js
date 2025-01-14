const express = require("express")
const { getUser } = require("../controllers/users")
const router = express.Router()

router.route('/:userId').get(getUser)

module.exports = router