"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPredictEndpointPlugin = exports.predictEndpointMiddlewareOptions = exports.predictEndpointMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
function predictEndpointMiddleware(options) {
    return (next) => async (args) => {
        const { input } = args;
        let { request } = args;
        if (protocol_http_1.HttpRequest.isInstance(request)) {
            if (input.PredictEndpoint) {
                const endpoint = options.urlParser(input.PredictEndpoint);
                request = {
                    ...request,
                    hostname: endpoint.hostname,
                    path: endpoint.path,
                    port: endpoint.port,
                    protocol: endpoint.protocol,
                    query: endpoint.query,
                };
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
exports.predictEndpointMiddleware = predictEndpointMiddleware;
exports.predictEndpointMiddlewareOptions = {
    step: "build",
    tags: ["PREDICT_ENDPOINT"],
    name: "predictEndpointMiddleware",
    override: true,
};
const getPredictEndpointPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(predictEndpointMiddleware(config), exports.predictEndpointMiddlewareOptions);
    },
});
exports.getPredictEndpointPlugin = getPredictEndpointPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdC1lbmRwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmVkaWN0LWVuZHBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUFxRDtBQVlyRCxTQUFnQix5QkFBeUIsQ0FBQyxPQUFpQztJQUN6RSxPQUFPLENBQWdDLElBQStCLEVBQTZCLEVBQUUsQ0FDbkcsS0FBSyxFQUFFLElBQWdDLEVBQXVDLEVBQUU7UUFDOUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksMkJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFO2dCQUN6QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxHQUFHO29CQUNSLEdBQUcsT0FBTztvQkFDVixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtvQkFDbkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO29CQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzNCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztpQkFDdEIsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztZQUNWLEdBQUcsSUFBSTtZQUNQLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDTixDQUFDO0FBdkJELDhEQXVCQztBQUVZLFFBQUEsZ0NBQWdDLEdBQXdCO0lBQ25FLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDMUIsSUFBSSxFQUFFLDJCQUEyQjtJQUNqQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLHdCQUF3QixHQUFHLENBQUMsTUFBZ0MsRUFBdUIsRUFBRSxDQUFDLENBQUM7SUFDbEcsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsRUFBRSx3Q0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Q0FDRixDQUFDLENBQUM7QUFKVSxRQUFBLHdCQUF3Qiw0QkFJbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBCdWlsZEhhbmRsZXIsXG4gIEJ1aWxkSGFuZGxlckFyZ3VtZW50cyxcbiAgQnVpbGRIYW5kbGVyT3B0aW9ucyxcbiAgQnVpbGRIYW5kbGVyT3V0cHV0LFxuICBCdWlsZE1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG4gIFVybFBhcnNlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVkaWN0RW5kcG9pbnRNaWRkbGV3YXJlKG9wdGlvbnM6IHsgdXJsUGFyc2VyOiBVcmxQYXJzZXIgfSk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQgfSA9IGFyZ3M7XG4gICAgICBsZXQgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgICAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgICAgaWYgKGlucHV0LlByZWRpY3RFbmRwb2ludCkge1xuICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gb3B0aW9ucy51cmxQYXJzZXIoaW5wdXQuUHJlZGljdEVuZHBvaW50KTtcbiAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgLi4ucmVxdWVzdCxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBlbmRwb2ludC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBhdGg6IGVuZHBvaW50LnBhdGgsXG4gICAgICAgICAgICBwb3J0OiBlbmRwb2ludC5wb3J0LFxuICAgICAgICAgICAgcHJvdG9jb2w6IGVuZHBvaW50LnByb3RvY29sLFxuICAgICAgICAgICAgcXVlcnk6IGVuZHBvaW50LnF1ZXJ5LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBwcmVkaWN0RW5kcG9pbnRNaWRkbGV3YXJlT3B0aW9uczogQnVpbGRIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJidWlsZFwiLFxuICB0YWdzOiBbXCJQUkVESUNUX0VORFBPSU5UXCJdLFxuICBuYW1lOiBcInByZWRpY3RFbmRwb2ludE1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJlZGljdEVuZHBvaW50UGx1Z2luID0gKGNvbmZpZzogeyB1cmxQYXJzZXI6IFVybFBhcnNlciB9KTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChwcmVkaWN0RW5kcG9pbnRNaWRkbGV3YXJlKGNvbmZpZyksIHByZWRpY3RFbmRwb2ludE1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19