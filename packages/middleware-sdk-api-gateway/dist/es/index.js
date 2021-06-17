import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export function acceptHeaderMiddleware() {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = args.request;
                if (HttpRequest.isInstance(request)) {
                    request.headers = __assign(__assign({}, request.headers), { accept: "application/json" });
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
            });
        }); };
    };
}
export var acceptHeaderMiddlewareOptions = {
    step: "build",
    tags: ["SET_ACCEPT_HEADER", "ACCEPT_HEADER"],
    name: "acceptHeaderMiddleware",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export var getAcceptHeaderPlugin = function (unused) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(acceptHeaderMiddleware(), acceptHeaderMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVdyRCxNQUFNLFVBQVUsc0JBQXNCO0lBQXRDLGlCQWVDO0lBZEMsT0FBTyxVQUFnQyxJQUErQjtRQUNwRSxPQUFBLFVBQU8sSUFBZ0M7OztnQkFDN0IsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFVO2dCQUN6QixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sQ0FBQyxPQUFPLHlCQUNWLE9BQU8sQ0FBQyxPQUFPLEtBQ2xCLE1BQU0sRUFBRSxrQkFBa0IsR0FDM0IsQ0FBQztpQkFDSDtnQkFDRCxzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxPQUFPLFNBQUEsSUFDUCxFQUFDOzthQUNKO0lBWkQsQ0FZQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUF3QjtJQUNoRSxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQztJQUM1QyxJQUFJLEVBQUUsd0JBQXdCO0lBQzlCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLDZEQUE2RDtBQUM3RCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLE1BQVcsSUFBMEIsT0FBQSxDQUFDO0lBQzFFLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGLENBQUMsRUFKeUUsQ0FJekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZEhhbmRsZXJPcHRpb25zLFxuICBCdWlsZEhhbmRsZXJPdXRwdXQsXG4gIEJ1aWxkTWlkZGxld2FyZSxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2NlcHRIZWFkZXJNaWRkbGV3YXJlKCk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICAgIGlmIChIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IHtcbiAgICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBhY2NlcHRIZWFkZXJNaWRkbGV3YXJlT3B0aW9uczogQnVpbGRIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJidWlsZFwiLFxuICB0YWdzOiBbXCJTRVRfQUNDRVBUX0hFQURFUlwiLCBcIkFDQ0VQVF9IRUFERVJcIl0sXG4gIG5hbWU6IFwiYWNjZXB0SGVhZGVyTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBjb25zdCBnZXRBY2NlcHRIZWFkZXJQbHVnaW4gPSAodW51c2VkOiBhbnkpOiBQbHVnZ2FibGU8YW55LCBhbnk+ID0+ICh7XG4gIGFwcGx5VG9TdGFjazogKGNsaWVudFN0YWNrKSA9PiB7XG4gICAgY2xpZW50U3RhY2suYWRkKGFjY2VwdEhlYWRlck1pZGRsZXdhcmUoKSwgYWNjZXB0SGVhZGVyTWlkZGxld2FyZU9wdGlvbnMpO1xuICB9LFxufSk7XG4iXX0=