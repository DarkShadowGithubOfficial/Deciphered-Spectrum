let app = require("express")();
let bodyParser = require("body-parser");
let axios = require("axios");
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
app.post('/photosynthesis.pdf', (req, res) => {
  let link;
  if (req.body.link.includes('https://') || req.body.link.includes('http://')) {
    link = req.body.link;
  } else {
    link = 'https://' + req.body.link;
  }
  axios.get(link).then(response => {
    res.send(`<base href="${link}">${response.data}`);
  })
})
app.listen(8080, () => console.log("8080"));
