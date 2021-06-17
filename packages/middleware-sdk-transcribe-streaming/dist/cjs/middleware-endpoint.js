"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketURLMiddlewareOptions = exports.websocketURLMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
/**
 * Middleware that generates WebSocket URL to TranscribeStreaming service
 * Reference: https://docs.aws.amazon.com/transcribe/latest/dg/websocket.html
 */
const websocketURLMiddleware = (options) => (next) => (args) => {
    var _a;
    const { request } = args;
    if (protocol_http_1.HttpRequest.isInstance(request) && ((_a = options.requestHandler.metadata) === null || _a === void 0 ? void 0 : _a.handlerProtocol) === "websocket") {
        // Update http/2 endpoint to WebSocket-specific endpoint.
        request.protocol = "wss:";
        // Append port to hostname because it needs to be signed together
        request.hostname = `${request.hostname}:8443`;
        request.path = `${request.path}-websocket`;
        request.method = "GET";
        // Move headers to query string. Because the signature is generated with
        // headers moved to query, the endpoint url needs to tally with the signature.
        const { headers } = request;
        // 'Content-Type' and 'x-amz-content-sha256' headers are normally set for
        // event stream, but WebSocket doesn't require it.
        // See: 'eventStreamHeaderMiddleware' in @aws-sdk/middleware-eventstream
        delete headers["Content-Type"];
        delete headers["x-amz-content-sha256"];
        // Serialized header like 'x-amzn-transcribe-sample-rate' should be 'sample-rate'
        // in WebSocket URL.
        for (const name of Object.keys(headers)) {
            if (name.indexOf("x-amzn-transcribe-") === 0) {
                const chunkedName = name.replace("x-amzn-transcribe-", "");
                request.query[chunkedName] = headers[name];
            }
        }
        // The service perfers Node.js style 'user-agent' over browser-style
        // 'x-amz-user-agent'
        if (headers["x-amz-user-agent"]) {
            request.query["user-agent"] = headers["x-amz-user-agent"];
        }
        // Host header is required for signing
        request.headers = { host: request.hostname };
    }
    return next(args);
};
exports.websocketURLMiddleware = websocketURLMiddleware;
exports.websocketURLMiddlewareOptions = {
    name: "websocketURLMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    relation: "after",
    toMiddleware: "eventStreamHeaderMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1lbmRwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlLWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUFxRDtBQVNyRDs7O0dBR0c7QUFDSSxNQUFNLHNCQUFzQixHQUNqQyxDQUFDLE9BQXFELEVBQTZCLEVBQUUsQ0FDckYsQ0FBQyxJQUE0QixFQUFFLEVBQUUsQ0FDakMsQ0FBQyxJQUFnQyxFQUFFLEVBQUU7O0lBQ25DLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDekIsSUFBSSwyQkFBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBLE1BQUEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLDBDQUFFLGVBQWUsTUFBSyxXQUFXLEVBQUU7UUFDdkcseURBQXlEO1FBQ3pELE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzFCLGlFQUFpRTtRQUNqRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsT0FBTyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUM7UUFDM0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsd0VBQXdFO1FBQ3hFLDhFQUE4RTtRQUM5RSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRTVCLHlFQUF5RTtRQUN6RSxrREFBa0Q7UUFDbEQsd0VBQXdFO1FBQ3hFLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFdkMsaUZBQWlGO1FBQ2pGLG9CQUFvQjtRQUNwQixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBRUQsb0VBQW9FO1FBQ3BFLHFCQUFxQjtRQUNyQixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDM0Q7UUFDRCxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUM7SUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUF6Q1MsUUFBQSxzQkFBc0IsMEJBeUMvQjtBQUVTLFFBQUEsNkJBQTZCLEdBQThCO0lBQ3RFLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQztJQUNuQyxRQUFRLEVBQUUsT0FBTztJQUNqQixZQUFZLEVBQUUsNkJBQTZCO0lBQzNDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZE1pZGRsZXdhcmUsXG4gIFJlbGF0aXZlTWlkZGxld2FyZU9wdGlvbnMsXG4gIFJlcXVlc3RIYW5kbGVyLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHRoYXQgZ2VuZXJhdGVzIFdlYlNvY2tldCBVUkwgdG8gVHJhbnNjcmliZVN0cmVhbWluZyBzZXJ2aWNlXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS90cmFuc2NyaWJlL2xhdGVzdC9kZy93ZWJzb2NrZXQuaHRtbFxuICovXG5leHBvcnQgY29uc3Qgd2Vic29ja2V0VVJMTWlkZGxld2FyZSA9XG4gIChvcHRpb25zOiB7IHJlcXVlc3RIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxhbnksIGFueT4gfSk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4gPT5cbiAgKG5leHQ6IEJ1aWxkSGFuZGxlcjxhbnksIGFueT4pID0+XG4gIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55PikgPT4ge1xuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSAmJiBvcHRpb25zLnJlcXVlc3RIYW5kbGVyLm1ldGFkYXRhPy5oYW5kbGVyUHJvdG9jb2wgPT09IFwid2Vic29ja2V0XCIpIHtcbiAgICAgIC8vIFVwZGF0ZSBodHRwLzIgZW5kcG9pbnQgdG8gV2ViU29ja2V0LXNwZWNpZmljIGVuZHBvaW50LlxuICAgICAgcmVxdWVzdC5wcm90b2NvbCA9IFwid3NzOlwiO1xuICAgICAgLy8gQXBwZW5kIHBvcnQgdG8gaG9zdG5hbWUgYmVjYXVzZSBpdCBuZWVkcyB0byBiZSBzaWduZWQgdG9nZXRoZXJcbiAgICAgIHJlcXVlc3QuaG9zdG5hbWUgPSBgJHtyZXF1ZXN0Lmhvc3RuYW1lfTo4NDQzYDtcbiAgICAgIHJlcXVlc3QucGF0aCA9IGAke3JlcXVlc3QucGF0aH0td2Vic29ja2V0YDtcbiAgICAgIHJlcXVlc3QubWV0aG9kID0gXCJHRVRcIjtcblxuICAgICAgLy8gTW92ZSBoZWFkZXJzIHRvIHF1ZXJ5IHN0cmluZy4gQmVjYXVzZSB0aGUgc2lnbmF0dXJlIGlzIGdlbmVyYXRlZCB3aXRoXG4gICAgICAvLyBoZWFkZXJzIG1vdmVkIHRvIHF1ZXJ5LCB0aGUgZW5kcG9pbnQgdXJsIG5lZWRzIHRvIHRhbGx5IHdpdGggdGhlIHNpZ25hdHVyZS5cbiAgICAgIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVxdWVzdDtcblxuICAgICAgLy8gJ0NvbnRlbnQtVHlwZScgYW5kICd4LWFtei1jb250ZW50LXNoYTI1NicgaGVhZGVycyBhcmUgbm9ybWFsbHkgc2V0IGZvclxuICAgICAgLy8gZXZlbnQgc3RyZWFtLCBidXQgV2ViU29ja2V0IGRvZXNuJ3QgcmVxdWlyZSBpdC5cbiAgICAgIC8vIFNlZTogJ2V2ZW50U3RyZWFtSGVhZGVyTWlkZGxld2FyZScgaW4gQGF3cy1zZGsvbWlkZGxld2FyZS1ldmVudHN0cmVhbVxuICAgICAgZGVsZXRlIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gICAgICBkZWxldGUgaGVhZGVyc1tcIngtYW16LWNvbnRlbnQtc2hhMjU2XCJdO1xuXG4gICAgICAvLyBTZXJpYWxpemVkIGhlYWRlciBsaWtlICd4LWFtem4tdHJhbnNjcmliZS1zYW1wbGUtcmF0ZScgc2hvdWxkIGJlICdzYW1wbGUtcmF0ZSdcbiAgICAgIC8vIGluIFdlYlNvY2tldCBVUkwuXG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihcIngtYW16bi10cmFuc2NyaWJlLVwiKSA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IGNodW5rZWROYW1lID0gbmFtZS5yZXBsYWNlKFwieC1hbXpuLXRyYW5zY3JpYmUtXCIsIFwiXCIpO1xuICAgICAgICAgIHJlcXVlc3QucXVlcnlbY2h1bmtlZE5hbWVdID0gaGVhZGVyc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgc2VydmljZSBwZXJmZXJzIE5vZGUuanMgc3R5bGUgJ3VzZXItYWdlbnQnIG92ZXIgYnJvd3Nlci1zdHlsZVxuICAgICAgLy8gJ3gtYW16LXVzZXItYWdlbnQnXG4gICAgICBpZiAoaGVhZGVyc1tcIngtYW16LXVzZXItYWdlbnRcIl0pIHtcbiAgICAgICAgcmVxdWVzdC5xdWVyeVtcInVzZXItYWdlbnRcIl0gPSBoZWFkZXJzW1wieC1hbXotdXNlci1hZ2VudFwiXTtcbiAgICAgIH1cbiAgICAgIC8vIEhvc3QgaGVhZGVyIGlzIHJlcXVpcmVkIGZvciBzaWduaW5nXG4gICAgICByZXF1ZXN0LmhlYWRlcnMgPSB7IGhvc3Q6IHJlcXVlc3QuaG9zdG5hbWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoYXJncyk7XG4gIH07XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRVUkxNaWRkbGV3YXJlT3B0aW9uczogUmVsYXRpdmVNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgbmFtZTogXCJ3ZWJzb2NrZXRVUkxNaWRkbGV3YXJlXCIsXG4gIHRhZ3M6IFtcIldFQlNPQ0tFVFwiLCBcIkVWRU5UX1NUUkVBTVwiXSxcbiAgcmVsYXRpb246IFwiYWZ0ZXJcIixcbiAgdG9NaWRkbGV3YXJlOiBcImV2ZW50U3RyZWFtSGVhZGVyTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG4iXX0=