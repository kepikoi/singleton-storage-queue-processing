import {AzureFunction, Context, HttpRequest} from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const date = Date.now();

    if (name && date) {
        context.bindings.outputQueueItem = {name, date};
        context.res = {
            body: "Hello " + name,
            date: Date.now()
        };

    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export default httpTrigger;
