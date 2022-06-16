const express = require(`express`);
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`posted up on http://localhost:${PORT}`)
)

app.use( express.json() )

app.get(`/CheemzZ`, (req, res) => {
    res.status(200).send({
        cheem: "CheemzZ is a pro",
        prolevel: "max"
    })
})

app.post(`/CheemzZ/:id`, (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: `Logo not provided`})
    }

    res.send({
        cheem: `lord cheemz likes ${logo} he has had it ${id} times`,
    });


});
