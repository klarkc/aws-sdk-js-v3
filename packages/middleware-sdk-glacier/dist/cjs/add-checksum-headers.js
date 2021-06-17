"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChecksumHeadersMiddlewareOptions = exports.addChecksumHeadersMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
function addChecksumHeadersMiddleware(options) {
    return (next) => async (args) => {
        const request = args.request;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            let headers = request.headers;
            const body = request.body;
            if (body) {
                const [contentHash, treeHash] = await options.bodyChecksumGenerator(request, options);
                for (const [headerName, hash] of [
                    ["x-amz-content-sha256", contentHash],
                    ["x-amz-sha256-tree-hash", treeHash],
                ]) {
                    if (!(headerName in headers) && hash) {
                        headers = {
                            ...headers,
                            [headerName]: hash,
                        };
                    }
                }
                // Update request headers with new set of headers.
                request.headers = headers;
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
exports.addChecksumHeadersMiddleware = addChecksumHeadersMiddleware;
exports.addChecksumHeadersMiddlewareOptions = {
    step: "build",
    tags: ["SET_CHECKSUM_HEADERS"],
    name: "addChecksumHeadersMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNoZWNrc3VtLWhlYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRkLWNoZWNrc3VtLWhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXFEO0FBWXJELFNBQWdCLDRCQUE0QixDQUFDLE9BQTJCO0lBQ3RFLE9BQU8sQ0FBZ0MsSUFBK0IsRUFBNkIsRUFBRSxDQUNuRyxLQUFLLEVBQUUsSUFBZ0MsRUFBdUMsRUFBRTtRQUM5RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksMkJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUM5QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV0RixLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQTZCO29CQUN4RCxDQUFDLHNCQUFzQixFQUFFLFdBQVcsQ0FBQztvQkFDckMsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUM7aUJBQ3JDLEVBQUU7b0JBQ0QsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRTt3QkFDcEMsT0FBTyxHQUFHOzRCQUNSLEdBQUcsT0FBTzs0QkFDVixDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUk7eUJBQ25CLENBQUM7cUJBQ0g7aUJBQ0Y7Z0JBRUQsa0RBQWtEO2dCQUNsRCxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUMzQjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7WUFDVixHQUFHLElBQUk7WUFDUCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWhDRCxvRUFnQ0M7QUFFWSxRQUFBLG1DQUFtQyxHQUF3QjtJQUN0RSxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQzlCLElBQUksRUFBRSw4QkFBOEI7SUFDcEMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkSGFuZGxlck9wdGlvbnMsXG4gIEJ1aWxkSGFuZGxlck91dHB1dCxcbiAgQnVpbGRNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IFByZXZpb3VzbHlSZXNvbHZlZCB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDaGVja3N1bUhlYWRlcnNNaWRkbGV3YXJlKG9wdGlvbnM6IFByZXZpb3VzbHlSZXNvbHZlZCk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhcmdzLnJlcXVlc3Q7XG4gICAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycztcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcXVlc3QuYm9keTtcbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICBjb25zdCBbY29udGVudEhhc2gsIHRyZWVIYXNoXSA9IGF3YWl0IG9wdGlvbnMuYm9keUNoZWNrc3VtR2VuZXJhdG9yKHJlcXVlc3QsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgZm9yIChjb25zdCBbaGVhZGVyTmFtZSwgaGFzaF0gb2YgPEFycmF5PFtzdHJpbmcsIHN0cmluZ10+PltcbiAgICAgICAgICAgIFtcIngtYW16LWNvbnRlbnQtc2hhMjU2XCIsIGNvbnRlbnRIYXNoXSxcbiAgICAgICAgICAgIFtcIngtYW16LXNoYTI1Ni10cmVlLWhhc2hcIiwgdHJlZUhhc2hdLFxuICAgICAgICAgIF0pIHtcbiAgICAgICAgICAgIGlmICghKGhlYWRlck5hbWUgaW4gaGVhZGVycykgJiYgaGFzaCkge1xuICAgICAgICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgW2hlYWRlck5hbWVdOiBoYXNoLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVwZGF0ZSByZXF1ZXN0IGhlYWRlcnMgd2l0aCBuZXcgc2V0IG9mIGhlYWRlcnMuXG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgYWRkQ2hlY2tzdW1IZWFkZXJzTWlkZGxld2FyZU9wdGlvbnM6IEJ1aWxkSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiYnVpbGRcIixcbiAgdGFnczogW1wiU0VUX0NIRUNLU1VNX0hFQURFUlNcIl0sXG4gIG5hbWU6IFwiYWRkQ2hlY2tzdW1IZWFkZXJzTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG4iXX0=