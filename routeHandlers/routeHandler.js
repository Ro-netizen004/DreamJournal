import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { createBody } from "../utils/createBody.js";
import { pushDataToFile } from "../utils/pushDataToFile.js";
export async function handleGet(res){
    try{
        const parsedData = await getData();
        sendResponse(res, 200, "application/json", JSON.stringify(parsedData));

    }
    catch(err){
        console.log(err);
    }
}

export async function handlePost(req, res){
    try{
        const body = await createBody(req);
        const parsedBody = JSON.parse(body);

        const parsedData =await getData();
        await pushDataToFile(parsedData, parsedBody);
        sendResponse(res, 201, "text/html", "Data received");
    }
    catch(err){
        console.error(err);
    }
}