
const authRequire = (req, res, next) => {
    const body = req.body
    if (body.username !== 'Seyram' || body.password !=='secret') {
        return res.send('Invalid Credentials')
    }
    next()
}


module.exports = {authRequire}