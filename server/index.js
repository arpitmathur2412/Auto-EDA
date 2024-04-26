const express=require("express");
const body_parser=require("body-parser");

const cors=require('cors');

const app=express();

app.use(cors())
app.use(express.json())


app.use(body_parser.urlencoded({extended:true}));

app.use("/api/auth",require("./routes/auth"))

app.get("/",(req,res)=>{
    res.send("hello")
})

// app.listen(5000,()=>{
//     console.log("server started at http://localhost:5000");
// })
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
