import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./getContentType.js";
import { sendResponse } from "./sendResponse.js";
import { parse } from "url";

export async function serveStatic(req, res, basedir){
    const publicDir = path.join(basedir, "public");

    const parsedUrl = parse(req.url);
    const pathname = parsedUrl.pathname;

    const pathToResource = path.join(publicDir, pathname === "/" ? "index.html" : pathname);

    const ext = path.extname(pathToResource);
    const contentType = getContentType(ext);

    try{
        const content = await fs.readFile(pathToResource);
        sendResponse(res, 200, contentType, content);
    }
    catch(err){
        sendResponse(res, 404, "text/html", "Something went wrong");
        console.log(err);
    }
}
