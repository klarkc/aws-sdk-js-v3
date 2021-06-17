import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export function predictEndpointMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var input, request, endpoint;
            return __generator(this, function (_a) {
                input = args.input;
                request = args.request;
                if (HttpRequest.isInstance(request)) {
                    if (input.PredictEndpoint) {
                        endpoint = options.urlParser(input.PredictEndpoint);
                        request = __assign(__assign({}, request), { hostname: endpoint.hostname, path: endpoint.path, port: endpoint.port, protocol: endpoint.protocol, query: endpoint.query });
                    }
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
            });
        }); };
    };
}
export var predictEndpointMiddlewareOptions = {
    step: "build",
    tags: ["PREDICT_ENDPOINT"],
    name: "predictEndpointMiddleware",
    override: true,
};
export var getPredictEndpointPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(predictEndpointMiddleware(config), predictEndpointMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdC1lbmRwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmVkaWN0LWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFZckQsTUFBTSxVQUFVLHlCQUF5QixDQUFDLE9BQWlDO0lBQTNFLGlCQXVCQztJQXRCQyxPQUFPLFVBQWdDLElBQStCO1FBQ3BFLE9BQUEsVUFBTyxJQUFnQzs7O2dCQUM3QixLQUFLLEdBQUssSUFBSSxNQUFULENBQVU7Z0JBQ2pCLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtnQkFDdkIsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNuQyxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUU7d0JBQ25CLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDMUQsT0FBTyx5QkFDRixPQUFPLEtBQ1YsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUNuQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQzNCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxHQUN0QixDQUFDO3FCQUNIO2lCQUNGO2dCQUNELHNCQUFPLElBQUksdUJBQ04sSUFBSSxLQUNQLE9BQU8sU0FBQSxJQUNQLEVBQUM7O2FBQ0o7SUFwQkQsQ0FvQkMsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSxnQ0FBZ0MsR0FBd0I7SUFDbkUsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztJQUMxQixJQUFJLEVBQUUsMkJBQTJCO0lBQ2pDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLFVBQUMsTUFBZ0MsSUFBMEIsT0FBQSxDQUFDO0lBQ2xHLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Q0FDRixDQUFDLEVBSmlHLENBSWpHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBCdWlsZEhhbmRsZXIsXG4gIEJ1aWxkSGFuZGxlckFyZ3VtZW50cyxcbiAgQnVpbGRIYW5kbGVyT3B0aW9ucyxcbiAgQnVpbGRIYW5kbGVyT3V0cHV0LFxuICBCdWlsZE1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG4gIFVybFBhcnNlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVkaWN0RW5kcG9pbnRNaWRkbGV3YXJlKG9wdGlvbnM6IHsgdXJsUGFyc2VyOiBVcmxQYXJzZXIgfSk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQgfSA9IGFyZ3M7XG4gICAgICBsZXQgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgICAgaWYgKGlucHV0LlByZWRpY3RFbmRwb2ludCkge1xuICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gb3B0aW9ucy51cmxQYXJzZXIoaW5wdXQuUHJlZGljdEVuZHBvaW50KTtcbiAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgLi4ucmVxdWVzdCxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBlbmRwb2ludC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBhdGg6IGVuZHBvaW50LnBhdGgsXG4gICAgICAgICAgICBwb3J0OiBlbmRwb2ludC5wb3J0LFxuICAgICAgICAgICAgcHJvdG9jb2w6IGVuZHBvaW50LnByb3RvY29sLFxuICAgICAgICAgICAgcXVlcnk6IGVuZHBvaW50LnF1ZXJ5LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBwcmVkaWN0RW5kcG9pbnRNaWRkbGV3YXJlT3B0aW9uczogQnVpbGRIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJidWlsZFwiLFxuICB0YWdzOiBbXCJQUkVESUNUX0VORFBPSU5UXCJdLFxuICBuYW1lOiBcInByZWRpY3RFbmRwb2ludE1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJlZGljdEVuZHBvaW50UGx1Z2luID0gKGNvbmZpZzogeyB1cmxQYXJzZXI6IFVybFBhcnNlciB9KTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChwcmVkaWN0RW5kcG9pbnRNaWRkbGV3YXJlKGNvbmZpZyksIHByZWRpY3RFbmRwb2ludE1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19