let axios = require("axios");
let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question("What is the url?", url => {
  let app = require('express')();
  axios.get(url).then(response => {
    newurl = url.split('https://')[1];
    splitArr = newurl.split("");
    newArr = splitArr.reverse();
    let revUrl = "";
    newArr.forEach(char => revUrl += char);
    app.get('/' + revUrl, function(req, res) {
      res.send("<title>Classes</title><base href='" + url + "'>" + response.data);
    })
    app.listen(8080, ()=>console.log("Server on 8080"))
  })
})
