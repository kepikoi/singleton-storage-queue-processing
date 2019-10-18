(async () => {
    const random = require("random-name");
    const { get, post } = require("httpie");
    
    const url = "http://127.0.0.1:7071/api/add";
    const promises = [];
    const maxCalls = 10;
    
    for (let i = 0; i < maxCalls; i++) {
        const call = post(url, {
            body: {
                name: random()
            }
        })
            .catch(console.error);
        
        promises.push();
    }
    
    await Promise.all(promises);
    console.log(`Successfully enqueued ${maxCalls} messages`);
})();

