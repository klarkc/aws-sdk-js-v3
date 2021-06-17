"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAcceptHeaderPlugin = exports.acceptHeaderMiddlewareOptions = exports.acceptHeaderMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
function acceptHeaderMiddleware() {
    return (next) => async (args) => {
        const { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            request.headers = {
                ...request.headers,
                accept: "application/json",
            };
        }
        return next({
            ...args,
            request,
        });
    };
}
exports.acceptHeaderMiddleware = acceptHeaderMiddleware;
exports.acceptHeaderMiddlewareOptions = {
    step: "build",
    tags: ["SET_ACCEPT_HEADER", "ACCEPT_HEADER"],
    name: "acceptHeaderMiddleware",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAcceptHeaderPlugin = (unused) => ({
    applyToStack: (clientStack) => {
        clientStack.add(acceptHeaderMiddleware(), exports.acceptHeaderMiddlewareOptions);
    },
});
exports.getAcceptHeaderPlugin = getAcceptHeaderPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXFEO0FBV3JELFNBQWdCLHNCQUFzQjtJQUNwQyxPQUFPLENBQWdDLElBQStCLEVBQTZCLEVBQUUsQ0FDbkcsS0FBSyxFQUFFLElBQWdDLEVBQXVDLEVBQUU7UUFDOUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLDJCQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUc7Z0JBQ2hCLEdBQUcsT0FBTyxDQUFDLE9BQU87Z0JBQ2xCLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0IsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7WUFDVixHQUFHLElBQUk7WUFDUCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWZELHdEQWVDO0FBRVksUUFBQSw2QkFBNkIsR0FBd0I7SUFDaEUsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUM7SUFDNUMsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRiw2REFBNkQ7QUFDdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQVcsRUFBdUIsRUFBRSxDQUFDLENBQUM7SUFDMUUsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLHFDQUE2QixDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUpVLFFBQUEscUJBQXFCLHlCQUkvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZEhhbmRsZXJPcHRpb25zLFxuICBCdWlsZEhhbmRsZXJPdXRwdXQsXG4gIEJ1aWxkTWlkZGxld2FyZSxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2NlcHRIZWFkZXJNaWRkbGV3YXJlKCk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICAgIGlmIChIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IHtcbiAgICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBhY2NlcHRIZWFkZXJNaWRkbGV3YXJlT3B0aW9uczogQnVpbGRIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJidWlsZFwiLFxuICB0YWdzOiBbXCJTRVRfQUNDRVBUX0hFQURFUlwiLCBcIkFDQ0VQVF9IRUFERVJcIl0sXG4gIG5hbWU6IFwiYWNjZXB0SGVhZGVyTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBjb25zdCBnZXRBY2NlcHRIZWFkZXJQbHVnaW4gPSAodW51c2VkOiBhbnkpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkKGFjY2VwdEhlYWRlck1pZGRsZXdhcmUoKSwgYWNjZXB0SGVhZGVyTWlkZGxld2FyZU9wdGlvbnMpO1xuICB9LFxufSk7XG4iXX0=