const express = require ('express');

const app = express();

app.get('/', (req, res) => res.send ('API is Running'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server started on PORT ${ PORT}`));




