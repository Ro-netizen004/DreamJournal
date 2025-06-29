export async function createBody(req){
    let body = '';

    try{
        for await (const chunk of req){
            body += chunk;
        }
        return body;
    }

    catch(err){
        console.log(err);
    }

}