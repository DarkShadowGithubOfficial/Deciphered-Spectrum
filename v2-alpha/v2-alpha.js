let express = require("express");
let app = express();
let axios = require("axios");
let url = require("url");
app.get('/', (req, res) => {
  urlTxt = url.parse(req.url, true, true, true);
  data = urlTxt.query;
  if (data.href) {
    let link = data.href;
    if (link.includes("https://") || link.includes("http://")) {
      link = link;
    } else {
      link = "https://" + link;
    }
    axios.get(link).then(response => {
      res.send(`<base href='${link}'><title>IXL Grade 8</title>${response.data}<script>document.querySelectorAll('a').forEach(a => {a.href = 'https://uq-test.programprodigy.repl.co?href=' + a.href})</script>`);
    })
  } else res.send("No url provided.");
})
app.listen(8080, () => {
  console.log("Listening on 8080");
})
