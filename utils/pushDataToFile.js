import path from 'node:path';
import fs from 'node:fs/promises';

export async function pushDataToFile(parsedData, parsedBody){
    parsedData.push(parsedBody);
    const pathToData = path.join("data","data.json");
    await fs.writeFile(pathToData, JSON.stringify(parsedData, null, 2));
}