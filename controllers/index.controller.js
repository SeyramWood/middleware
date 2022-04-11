const greet = (req, res) => {
    res.send('Greeting from Seyram')
}

const welcome = (req, res) => {
    res.send('Hello World')
}

const protected = (req, res) => {
    res.send('You can see this because you are authenticated.')
}


module.exports = {greet, welcome, protected}