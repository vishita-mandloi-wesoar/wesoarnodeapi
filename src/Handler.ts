import serverless from "serverless-http";
import {app} from "./App";

// @ts-ignore
module.exports.graphQlHandler = (event, context, callback) => {
    // tslint:disable-next-line:no-shadowed-variable
    const graphQlHandler = serverless(app, {
        cors: {
            origin: '*'
        }
    });
    // tell AWS lambda we do not want to wait for NodeJS event loop
    // to be empty in order to send the response
    context.callbackWaitsForEmptyEventLoop = false;

    // process the request
    return graphQlHandler(event, context);
};