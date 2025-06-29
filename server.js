import http from "node:http";

import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./routeHandlers/routeHandler.js";
import { handlePost } from "./routeHandlers/routeHandler.js";
const PORT = 2000;
const __dirname = import.meta.dirname;

const server = http.createServer(async(req, res)=>{
    if(req.url.startsWith("/api")){
        if(req.method==="GET"){
            return handleGet(res);
        }

        if(req.method==="POST"){
            return handlePost(req, res);
        }
    }
    
    else{
        await serveStatic(req, res, __dirname);
    }
})

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

