const {StatusCodes} = require("http-status-codes")

const dashboard = async (req, res) => {
    try {
        res.json({ message: "Dashboard" })
    }
    catch (err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err : err.message})
    }
}

module.exports = {dashboard}