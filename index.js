const app = require('express')();

app.get('/skills', (req, res) => {
    res.status(200).send({
        message: "api working"
    })
});

app.listen(8080, () => console.log("server start"));