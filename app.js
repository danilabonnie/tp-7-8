const express = require ('express')
const app = express();
const port = 3000

app.get('/', (req,res)=>{
    res.send(`<div style="background-color: black;">
            <h2 style="color: white">Bienvenidos</h2>
        </div>
        `)
})

app.get('/json', (req,res)=>{
    res.json(
        {
            "a": "aaaaa",
            "b": "bbbbb",
            "c": "ccccc"
        }
    )
})

app.get('/imagen', (req,res)=>{
    res.sendFile(__dirname+"/finalv.png")
})

app.use((req,res)=>{
    //res.send(`esta pag no existe`)
    res.status(404).send("esta pag no existe")
})

app.listen(3000, ()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
})