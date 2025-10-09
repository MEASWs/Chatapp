import express from "express"   // import express for server
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js" // import message routes
// import friendRoutes from "./routes/friend.route.js"; // ใช้ friend.route.js
import dotenv from "dotenv"             // load env variables
import { connectDB } from "./lib/db.js";        // import db connection function
import cookieParser from "cookie-parser"; // import cookie parser for cookies
import cors from "cors"; // import cors for cross-origin resource sharing
import { app,server } from "./lib/socket.js";


dotenv.config()     // load env variables

const PORT = process.env.PORT // set port      

app.use(express.json()) // for parsing application/json
app.use(cookieParser()) // for parsing cookies
app.use(cors({            // for cross-origin resource sharing
    origin: "http://localhost:5173", // allow requests from client url
    credentials: true, // allow credentials (cookies) to be sent
})
)

app.use("/api/auth", authRoutes)    // for auth routes
app.use("/api/messages", messageRoutes)    // for message routes
// app.use("/api/friends", friendRoutes); // for friend routes

server.listen(PORT,() => {     // start server  
    console.log("server run PORT:" + PORT)
    connectDB()
})