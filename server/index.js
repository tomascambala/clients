const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://tomas:123@cluster0.uyrfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},(e)=>{
  console.log("connected do DB")
});


const clientsSchema = new mongoose.Schema({
  name: String,
  email: String, 
  phone: String, 
  providers: [Number],
});
const Client = mongoose.model("Client", clientsSchema);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json())

app.get('/',(req, res)=>{

    res.send("wooow")
})

app.get("/clients", function(req, res){
  Client.find({}, function(err){
      if(err){
          console.log("ERROR!");
      } else {
          res.send("SUceess")
      }
  })
   });

   app.post("/clients", function(req, res){
        console.log("body", req.body)
    // Client.create(req.body, function(err){
    //     if(err){
    //         res.send("error");
    //     } else {
    //         res.send("success post");
    //     }
    // })
    res.send("very nice")
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });