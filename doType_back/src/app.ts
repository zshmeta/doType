// import express, {Express} from "express"
// import mongoose from "mongoose"
// import cors from "cors"
// import todoRoutes from "./routes"
//
// const app: Express = express()
//
// const PORT: string | number = process.env.PORT || 4000
//
// app.use(cors())
// app.use(todoRoutes)
//
// const uri = `mongodb+srv://zshmeta:${process.env.MONGO_PASSWORD}@dotype.iwkvwk1.mongodb.net/?retryWrites=true&w=majority`;
// // const options = {useNewUrlParser: true, useUnifiedTopology: true}
//
// mongoose
//     .connect(uri)
//     .then(() =>
//         app.listen(PORT, () =>
//             console.log(`Server running on http://localhost:${PORT}`)
//         )
//     )
//     .catch(error => {
//         throw error
//     })

// export default app;

import express, {Express} from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"


export const App = () => {
    const app: Express = express()

    const PORT: string | number = process.env.PORT || 4000

    app.use(cors())
    app.use(todoRoutes)
    const uri = `mongodb+srv://zshmeta:${process.env.MONGO_PASSWORD}@dotype.iwkvwk1.mongodb.net/?retryWrites=true&w=majority`;


// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = {useNewUrlParser: true, useUnifiedTopology: true}


    mongoose
        .connect(uri)
        .then(() =>
            app.listen(PORT, () =>
                console.log(`Server running on http://localhost:${PORT}`)
            )
        )
        .catch(error => {
            throw error
        })
}