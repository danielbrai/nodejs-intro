const app = require("express")();
const port = 3000;

const bodyParser = require("body-parser");
const registerRouters = require("./routes/routerRegister");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

registerRouters(app);

app.listen(port, () => console.log(`Listen port ${port}`));
