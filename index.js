const express = require("express")
const cors = require("cors")
const app = express()

// ROUTES
const AuthRoute = require('./routes/auth')
const ProductRoute = require("./routes/product")
const UserRoute = require("./routes/user")
const CategoryRoute = require("./routes/category")

// config

const connectToDb = require('./config/connectToDb')
connectToDb()

app.use(cors())
app.use(express.json())

const PORT = 4000

app.listen(PORT, () => {
    console.log(`App runn ing on port ${PORT}`);
})


app.use('/auth', AuthRoute)
app.use('/products', ProductRoute)
app.use("/user", UserRoute)
app.use("/category", CategoryRoute)

















// ENDPOINT serves as the transfer source or the destination.
// Routing: Routing is the path in which the client's request talk to the applications' endpoints.
// A middleware is a fuction that will have all the access for requesting an object and moving to the next middleware function in the application request-response cycle.



