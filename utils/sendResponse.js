export const sendResponse = (res, statusCode, headerType, content) => {
    res.statusCode = statusCode;
    res.setHeader = "Content-Type", headerType;
    res.end(content);
}