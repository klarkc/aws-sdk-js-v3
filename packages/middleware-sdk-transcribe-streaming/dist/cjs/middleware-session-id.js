"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectSessionIdMiddlewareOptions = exports.injectSessionIdMiddleware = void 0;
const uuid_1 = require("uuid");
/**
 * Middleware that inject default sessionId for operations, and inject
 * the parameters from request to the response metadata. This is
 * necessary because the SDK cannot access any parameters other than
 * the result stream. So it copies the parameters from input to the same
 * parameters in the output.
 */
const injectSessionIdMiddleware = (config) => (next) => async (args) => {
    if (args.input.SessionId === undefined && isWebSocket(config)) {
        args.input.SessionId = uuid_1.v4();
    }
    const requestParams = {
        ...args.input,
    };
    const response = await next(args);
    const output = response.output;
    for (const key of Object.keys(output)) {
        if (output[key] === undefined && requestParams[key]) {
            output[key] = requestParams[key];
        }
    }
    return response;
};
exports.injectSessionIdMiddleware = injectSessionIdMiddleware;
const isWebSocket = (config) => { var _a; return ((_a = config.requestHandler.metadata) === null || _a === void 0 ? void 0 : _a.handlerProtocol) === "websocket"; };
exports.injectSessionIdMiddlewareOptions = {
    step: "initialize",
    name: "injectSessionIdMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zZXNzaW9uLWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUtc2Vzc2lvbi1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSwrQkFBMEI7QUFPMUI7Ozs7OztHQU1HO0FBQ0ksTUFBTSx5QkFBeUIsR0FDcEMsQ0FBQyxNQUFvRCxFQUFrQyxFQUFFLENBQ3pGLENBQUMsSUFBaUQsRUFBRSxFQUFFLENBQ3RELEtBQUssRUFBRSxJQUE2QyxFQUFFLEVBQUU7SUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQUUsRUFBRSxDQUFDO0tBQzdCO0lBQ0QsTUFBTSxhQUFhLEdBQUc7UUFDcEIsR0FBRyxJQUFJLENBQUMsS0FBSztLQUNkLENBQUM7SUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQy9CLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNyQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7S0FDRjtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQWxCUyxRQUFBLHlCQUF5Qiw2QkFrQmxDO0FBRUosTUFBTSxXQUFXLEdBQUcsQ0FBQyxNQUFvRCxFQUFFLEVBQUUsV0FDM0UsT0FBQSxDQUFBLE1BQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLDBDQUFFLGVBQWUsTUFBSyxXQUFXLENBQUEsRUFBQSxDQUFDO0FBRXJELFFBQUEsZ0NBQWdDLEdBQTZCO0lBQ3hFLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSwyQkFBMkI7SUFDakMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQztJQUNuQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIFJlcXVlc3RIYW5kbGVyLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcblxudHlwZSBXaXRoU2Vzc2lvbiA9IHtcbiAgU2Vzc2lvbklkPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdGhhdCBpbmplY3QgZGVmYXVsdCBzZXNzaW9uSWQgZm9yIG9wZXJhdGlvbnMsIGFuZCBpbmplY3RcbiAqIHRoZSBwYXJhbWV0ZXJzIGZyb20gcmVxdWVzdCB0byB0aGUgcmVzcG9uc2UgbWV0YWRhdGEuIFRoaXMgaXNcbiAqIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBTREsgY2Fubm90IGFjY2VzcyBhbnkgcGFyYW1ldGVycyBvdGhlciB0aGFuXG4gKiB0aGUgcmVzdWx0IHN0cmVhbS4gU28gaXQgY29waWVzIHRoZSBwYXJhbWV0ZXJzIGZyb20gaW5wdXQgdG8gdGhlIHNhbWVcbiAqIHBhcmFtZXRlcnMgaW4gdGhlIG91dHB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGluamVjdFNlc3Npb25JZE1pZGRsZXdhcmUgPVxuICAoY29uZmlnOiB7IHJlcXVlc3RIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxhbnksIGFueT4gfSk6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiA9PlxuICAobmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8V2l0aFNlc3Npb24sIFdpdGhTZXNzaW9uPikgPT5cbiAgYXN5bmMgKGFyZ3M6IEluaXRpYWxpemVIYW5kbGVyQXJndW1lbnRzPFdpdGhTZXNzaW9uPikgPT4ge1xuICAgIGlmIChhcmdzLmlucHV0LlNlc3Npb25JZCA9PT0gdW5kZWZpbmVkICYmIGlzV2ViU29ja2V0KGNvbmZpZykpIHtcbiAgICAgIGFyZ3MuaW5wdXQuU2Vzc2lvbklkID0gdjQoKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIC4uLmFyZ3MuaW5wdXQsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5leHQoYXJncyk7XG4gICAgY29uc3Qgb3V0cHV0ID0gcmVzcG9uc2Uub3V0cHV0O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG91dHB1dCkpIHtcbiAgICAgIGlmIChvdXRwdXRba2V5XSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RQYXJhbXNba2V5XSkge1xuICAgICAgICBvdXRwdXRba2V5XSA9IHJlcXVlc3RQYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG5jb25zdCBpc1dlYlNvY2tldCA9IChjb25maWc6IHsgcmVxdWVzdEhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyPGFueSwgYW55PiB9KSA9PlxuICBjb25maWcucmVxdWVzdEhhbmRsZXIubWV0YWRhdGE/LmhhbmRsZXJQcm90b2NvbCA9PT0gXCJ3ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IGluamVjdFNlc3Npb25JZE1pZGRsZXdhcmVPcHRpb25zOiBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICBuYW1lOiBcImluamVjdFNlc3Npb25JZE1pZGRsZXdhcmVcIixcbiAgdGFnczogW1wiV0VCU09DS0VUXCIsIFwiRVZFTlRfU1RSRUFNXCJdLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG4iXX0=