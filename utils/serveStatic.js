import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./getContentType.js";
import { sendResponse } from "./sendResponse.js";
export async function serveStatic(req, res, basedir){
    const publicDir = path.join(basedir, "public");
    const pathToResource = path.join(publicDir, 
        req.url==="/" ? "index.html": req.url);

    const ext = path.extname(pathToResource);
    const contentType = getContentType(ext);

    try{
        const content = await fs.readFile(pathToResource);
        sendResponse( res, 200, contentType, content);
    }

    catch(err){
        sendResponse( res, 404, "text/html", "Something went wrong");
        console.log(err);
    }
    
}