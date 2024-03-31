const express = require("express")

const app = express();
app.use(express.json());
// function sum(n){
//     let ans =0;
//     for(let i =0;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }
// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi there ur ans is "+ans);
    
// })

const users = [{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function(req,res){
    const jk = users[0].kidneys;
    console.log(jk);
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy,
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json();
})

app.delete("/",function(req,res){
    if(iaThereAtleastOneUnhealthyKidney()){
        const newKidneys = []
        for(let i = 0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json("done");
    }else{
        res.status(411).json("u have no false")
    }
})

function iaThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney= true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);