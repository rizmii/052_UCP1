const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.listen(PORT,()=>{
    console.log ("server start on port 3000");

});

db.sequelize.sync().then((result)=>{
    app.listen(3000,()=>{
         console.log ("server started");
    })
})
    .catch((err)=>{
        console.log(err);
    });

    app.post("/music", async(req,res)=>{
        const data = req.body;
        try{
            const music = await db.music.create(data);
            res.send(music);
        } catch(err){
            res.send(err);
        }
    })

    app.get("/music",async(req,res)=>{
        try{
            const music = await db.music.findAll();
            res.send(music);
        } catch(err){
            res.send(err);
        }
    })

app.put("/music/:id",async(req,res)=>{
    const id= req.params.id;
    const data = req.body;
        try{
            const music = await db.music.findByPk(id);
            if(!music){return res.status(404).send({message: "musik tidak tersedia"});}
            await music.update(data);
            res.send({message:" music updated", music});
        } catch(err){
            res.status(500).send(err);
        }
    })    
    app.delete("/music/:id",async(req,res)=>{
    const id= req.params.id;
    
        try{
            const music = await db.music.findByPk(id);
            if(!music){return res.status(404).send({message: "musik tidak tersedia"});}
            await music.destroy();
            res.send({message:" music deleted", music});
        } catch(err){
            res.status(500).send(err);
        }
    })   