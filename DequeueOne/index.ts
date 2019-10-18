import {AzureFunction, Context} from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, myQueueItem: any): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const date = new Date(myQueueItem.date);
    context.log('!!!!!!!!!!!!! Queue trigger function processed work item', myQueueItem.name, date);
};

export default queueTrigger;
