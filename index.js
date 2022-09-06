import { getSkills } from './database.js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(
    cors({
        origin: "*"
    })
)
app.get('/skills', async (req, res) => {
    try{
        const skills = await getSkills()
        res.status(200).send(skills)
    }
    catch(e)
    {
        res.status(500).send('Internal server error')
    }
    
})


app.listen(8080, () => console.log("server start"));