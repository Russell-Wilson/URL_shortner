const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const pool = require("./Config/config");
const cors = require("cors")
const { nanoid } = require('nanoid')

//Avoid cors policy issues
app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

//parse in json
//middleware
app.use(express.json());

app.get('/results', async (req, res) => {
    try {
        const { rows } = await pool.query(`select * from url_routes;`)
        res.status(200).json(rows)
    }
    catch(e) {
        console.log(e)
        res.status(500).json(e)
    }
})

app.post('/url', async (req, res) => {
    try {
        var route_url = req.body.url;
        var name = req.body.s_name;
        var random_id = nanoid(6)
        var query = await pool.query(`INSERT INTO url_routes (original_route, sitename, site_key) VALUES ('${route_url}', '${name}', '${random_id}');UPDATE url_routes SET new_route = CONCAT('http://localhost:5000/',site_key);`)
        res.end();
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }});

app.delete('/delete', async (req, res) => {
    try{
        var query = await pool.query(`Delete from url_routes;`)
    res.end();
    }catch (e) {
        console.log(e)
        res.status(500).json(e)
    }});
    

app.get('/:key_url?', async (req, res) => {
    try {
        var url_key = req.params.key_url;
        if (!url_key) {
            res.status(500)
        }
        const { rows } = await pool.query(`select * from url_routes where site_key = '${url_key}';`)
        res.redirect(`${rows[0].original_route}`)
    }
    catch(e) {
        console.log(e)
        res.status(500).json(e)
    }
})


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}!`)); //Line 6

