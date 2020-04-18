import "reflect-metadata";
import express from 'express';
const  i18n = require("i18n");

import {ApolloServer} from 'apollo-server-express';
import {MongoHelper} from "./core/helper/Mongo.helper";
import {ConfigHelper} from "./core/helper/Config.helper";
import resolvers from "./core/utils/Schema.resolver";
import appTypeDefs from "./core/utils/Schema.typedefs";


const mongo = require('mongoose');


const app: express.Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(i18n.init);
i18n.configure({
    directory: __dirname + '/core/locales'
});



const PORT = ConfigHelper.SERVER.PORT;

const server = new ApolloServer({
    typeDefs: appTypeDefs,
    resolvers,
    context: ({ req }) => {
        // add the user to the context
        return { language:req.headers.language,domain:req.headers.domain};
      },
});


server.applyMiddleware({app,path: ConfigHelper.SERVER.API_URL});
app.listen({ port: ConfigHelper.SERVER.PORT }, async () => {
    console.info(`Listening on port ${PORT}`);
   //await MongoHelper.initClientDbConnection();
//    console.log("database=====")
    try {
    mongo.connect('mongodb+srv://vishita:WeSoar00@wesoar-dev-vishita-zqcex.mongodb.net/wesoar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    mongo.connection.once('open', () => {
    console.log('connected to database');
})
        // @ts-ignore
       // await MongoHelper.connect(ConfigHelper.DATABASE.URL);
        //console.info(`Connected to Mongo!`);
    } catch (err) {
        console.error(`Unable to connect to Mongo!`, err);
    }
});
export {app};
