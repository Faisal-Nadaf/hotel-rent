const express=require("express");
const app=express();
const mongoose=require("mongoose");
let mongo_url="mongodb://127.0.0.1:27017/wonderlust";
const listing = require("./models/listing.js");
const path = require("path");
app.set("view engine","ejs");
app.set("view",path.join(__dirname,"views"));


main().then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(mongo_url);
}


app.get("/",(req,res)=>{
    res.send("hello im root");
});

app.get("/listing",async(req,res)=>{
    const allListing= await listing.find({});
    res.render("/listings/index.ejs",{allListing});

});

// app.get("/listing", async(req,res)=>{
    // let samplelisting = new listing({
    //     title:"my home",
    //     discpriction:"my new home in city",
    //     price:56413,
    //     location:"goa",
    //     country:"india",

    // });
    // await samplelisting.save(); 
    // console.log("sample image saved");
    // res.send("successful testing");
// });



app.listen(8080,() =>{
  console.log("server started on port 8080");
});