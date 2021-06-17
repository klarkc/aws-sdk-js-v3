import { HttpRequest } from "@aws-sdk/protocol-http";
/**
 * Middleware that generates WebSocket URL to TranscribeStreaming service
 * Reference: https://docs.aws.amazon.com/transcribe/latest/dg/websocket.html
 */
export const websocketURLMiddleware = (options) => (next) => (args) => {
    var _a;
    const { request } = args;
    if (HttpRequest.isInstance(request) && ((_a = options.requestHandler.metadata) === null || _a === void 0 ? void 0 : _a.handlerProtocol) === "websocket") {
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
export const websocketURLMiddlewareOptions = {
    name: "websocketURLMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    relation: "after",
    toMiddleware: "eventStreamHeaderMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1lbmRwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlLWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVNyRDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FDakMsQ0FBQyxPQUFxRCxFQUE2QixFQUFFLENBQ3JGLENBQUMsSUFBNEIsRUFBRSxFQUFFLENBQ2pDLENBQUMsSUFBZ0MsRUFBRSxFQUFFOztJQUNuQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBLE1BQUEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLDBDQUFFLGVBQWUsTUFBSyxXQUFXLEVBQUU7UUFDdkcseURBQXlEO1FBQ3pELE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzFCLGlFQUFpRTtRQUNqRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsT0FBTyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUM7UUFDM0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsd0VBQXdFO1FBQ3hFLDhFQUE4RTtRQUM5RSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRTVCLHlFQUF5RTtRQUN6RSxrREFBa0Q7UUFDbEQsd0VBQXdFO1FBQ3hFLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFdkMsaUZBQWlGO1FBQ2pGLG9CQUFvQjtRQUNwQixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBRUQsb0VBQW9FO1FBQ3BFLHFCQUFxQjtRQUNyQixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDM0Q7UUFDRCxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUM7SUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFSixNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBOEI7SUFDdEUsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDO0lBQ25DLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFlBQVksRUFBRSw2QkFBNkI7SUFDM0MsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkTWlkZGxld2FyZSxcbiAgUmVsYXRpdmVNaWRkbGV3YXJlT3B0aW9ucyxcbiAgUmVxdWVzdEhhbmRsZXIsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdGhhdCBnZW5lcmF0ZXMgV2ViU29ja2V0IFVSTCB0byBUcmFuc2NyaWJlU3RyZWFtaW5nIHNlcnZpY2VcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3RyYW5zY3JpYmUvbGF0ZXN0L2RnL3dlYnNvY2tldC5odG1sXG4gKi9cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRVUkxNaWRkbGV3YXJlID1cbiAgKG9wdGlvbnM6IHsgcmVxdWVzdEhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyPGFueSwgYW55PiB9KTogQnVpbGRNaWRkbGV3YXJlPGFueSwgYW55PiA9PlxuICAobmV4dDogQnVpbGRIYW5kbGVyPGFueSwgYW55PikgPT5cbiAgKGFyZ3M6IEJ1aWxkSGFuZGxlckFyZ3VtZW50czxhbnk+KSA9PiB7XG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmIChIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpICYmIG9wdGlvbnMucmVxdWVzdEhhbmRsZXIubWV0YWRhdGE/LmhhbmRsZXJQcm90b2NvbCA9PT0gXCJ3ZWJzb2NrZXRcIikge1xuICAgICAgLy8gVXBkYXRlIGh0dHAvMiBlbmRwb2ludCB0byBXZWJTb2NrZXQtc3BlY2lmaWMgZW5kcG9pbnQuXG4gICAgICByZXF1ZXN0LnByb3RvY29sID0gXCJ3c3M6XCI7XG4gICAgICAvLyBBcHBlbmQgcG9ydCB0byBob3N0bmFtZSBiZWNhdXNlIGl0IG5lZWRzIHRvIGJlIHNpZ25lZCB0b2dldGhlclxuICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IGAke3JlcXVlc3QuaG9zdG5hbWV9Ojg0NDNgO1xuICAgICAgcmVxdWVzdC5wYXRoID0gYCR7cmVxdWVzdC5wYXRofS13ZWJzb2NrZXRgO1xuICAgICAgcmVxdWVzdC5tZXRob2QgPSBcIkdFVFwiO1xuXG4gICAgICAvLyBNb3ZlIGhlYWRlcnMgdG8gcXVlcnkgc3RyaW5nLiBCZWNhdXNlIHRoZSBzaWduYXR1cmUgaXMgZ2VuZXJhdGVkIHdpdGhcbiAgICAgIC8vIGhlYWRlcnMgbW92ZWQgdG8gcXVlcnksIHRoZSBlbmRwb2ludCB1cmwgbmVlZHMgdG8gdGFsbHkgd2l0aCB0aGUgc2lnbmF0dXJlLlxuICAgICAgY29uc3QgeyBoZWFkZXJzIH0gPSByZXF1ZXN0O1xuXG4gICAgICAvLyAnQ29udGVudC1UeXBlJyBhbmQgJ3gtYW16LWNvbnRlbnQtc2hhMjU2JyBoZWFkZXJzIGFyZSBub3JtYWxseSBzZXQgZm9yXG4gICAgICAvLyBldmVudCBzdHJlYW0sIGJ1dCBXZWJTb2NrZXQgZG9lc24ndCByZXF1aXJlIGl0LlxuICAgICAgLy8gU2VlOiAnZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlJyBpbiBAYXdzLXNkay9taWRkbGV3YXJlLWV2ZW50c3RyZWFtXG4gICAgICBkZWxldGUgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW1wieC1hbXotY29udGVudC1zaGEyNTZcIl07XG5cbiAgICAgIC8vIFNlcmlhbGl6ZWQgaGVhZGVyIGxpa2UgJ3gtYW16bi10cmFuc2NyaWJlLXNhbXBsZS1yYXRlJyBzaG91bGQgYmUgJ3NhbXBsZS1yYXRlJ1xuICAgICAgLy8gaW4gV2ViU29ja2V0IFVSTC5cbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKFwieC1hbXpuLXRyYW5zY3JpYmUtXCIpID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgY2h1bmtlZE5hbWUgPSBuYW1lLnJlcGxhY2UoXCJ4LWFtem4tdHJhbnNjcmliZS1cIiwgXCJcIik7XG4gICAgICAgICAgcmVxdWVzdC5xdWVyeVtjaHVua2VkTmFtZV0gPSBoZWFkZXJzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBzZXJ2aWNlIHBlcmZlcnMgTm9kZS5qcyBzdHlsZSAndXNlci1hZ2VudCcgb3ZlciBicm93c2VyLXN0eWxlXG4gICAgICAvLyAneC1hbXotdXNlci1hZ2VudCdcbiAgICAgIGlmIChoZWFkZXJzW1wieC1hbXotdXNlci1hZ2VudFwiXSkge1xuICAgICAgICByZXF1ZXN0LnF1ZXJ5W1widXNlci1hZ2VudFwiXSA9IGhlYWRlcnNbXCJ4LWFtei11c2VyLWFnZW50XCJdO1xuICAgICAgfVxuICAgICAgLy8gSG9zdCBoZWFkZXIgaXMgcmVxdWlyZWQgZm9yIHNpZ25pbmdcbiAgICAgIHJlcXVlc3QuaGVhZGVycyA9IHsgaG9zdDogcmVxdWVzdC5ob3N0bmFtZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbmV4dChhcmdzKTtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFVSTE1pZGRsZXdhcmVPcHRpb25zOiBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zID0ge1xuICBuYW1lOiBcIndlYnNvY2tldFVSTE1pZGRsZXdhcmVcIixcbiAgdGFnczogW1wiV0VCU09DS0VUXCIsIFwiRVZFTlRfU1RSRUFNXCJdLFxuICByZWxhdGlvbjogXCJhZnRlclwiLFxuICB0b01pZGRsZXdhcmU6IFwiZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcbiJdfQ==