import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost } from "./routeHandlers/routeHandler.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 2000;

const server = http.createServer(async(req, res)=>{
    if(req.url.startsWith("/api")){
        if(req.method==="GET"){
            return handleGet(res);
        }
        if(req.method==="POST"){
            return handlePost(req, res);
        }
    } else {
        await serveStatic(req, res, __dirname);
    }
});

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
