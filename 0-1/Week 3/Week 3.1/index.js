const express = require("express");
const zod = require("zod");
const app = express();

// app.get(
//     "/health-checkup",
//     function (req, res, next) {
//         console.log("hi from req1");
//         next();
//     },
//     function (req, res) {
//         console.log("req2");
//     }
// );

// global catch
// app.use(express.json());
// app.post("/health-checkup",function(req,res){
//     const kidneys = req.body.kidneys;
//     if(!kidneys){
//         res.json({
//             msg:"no inputs"
//         })
//         return;
//     }
//     const kidneyLength = kidneys.length;

//     res.send("your kidney length is :"+kidneyLength);
// });

// //global catch
// app.use(function(err,req,res,next){
//     res.json({
//         msg:"something is wrong with our server"
//     })
// })

//zod
app.use(express.json());

const schema = zod.array(zod.number())
// {
    // email : string
    // password :atleast 8 latter
    // country: "IN", "US"
// }

// const schema = zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country: zod.literal("IN").or(zod.literal("US")),
//     kidneys:zod.array(zod.number())
// })

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const kidneyLength = kidneys.length;
    // res.send("your kidney length is :"+kidneyLength);
    if (!response.success) {
        res.status(411).json({
            msg: "failed",
        });
    } else {
        res.send({
            response,
        });
    }
}); 

app.listen(3000);
