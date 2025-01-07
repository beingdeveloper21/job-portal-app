import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'


const app=express()

// Connect to the database
await connectDB()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks)

const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `)
})