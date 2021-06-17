import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export function addGlacierApiVersionMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = args.request;
                if (HttpRequest.isInstance(request)) {
                    request.headers["x-amz-glacier-version"] = options.apiVersion;
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
            });
        }); };
    };
}
export var addGlacierApiVersionMiddlewareOptions = {
    step: "build",
    tags: ["SET_GLACIER_VERSION"],
    name: "addGlacierApiVersionMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdsYWNpZXItYXBpLXZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRkLWdsYWNpZXItYXBpLXZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVlyRCxNQUFNLFVBQVUsOEJBQThCLENBQUMsT0FBMkI7SUFBMUUsaUJBYUM7SUFaQyxPQUFPLFVBQWdDLElBQStCO1FBQ3BFLE9BQUEsVUFBTyxJQUFnQzs7O2dCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNuQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztpQkFDL0Q7Z0JBRUQsc0JBQU8sSUFBSSx1QkFDTixJQUFJLEtBQ1AsT0FBTyxTQUFBLElBQ1AsRUFBQzs7YUFDSjtJQVZELENBVUMsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSxxQ0FBcUMsR0FBd0I7SUFDeEUsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUM3QixJQUFJLEVBQUUsZ0NBQWdDO0lBQ3RDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZEhhbmRsZXJPcHRpb25zLFxuICBCdWlsZEhhbmRsZXJPdXRwdXQsXG4gIEJ1aWxkTWlkZGxld2FyZSxcbiAgTWV0YWRhdGFCZWFyZXIsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBQcmV2aW91c2x5UmVzb2x2ZWQgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkR2xhY2llckFwaVZlcnNpb25NaWRkbGV3YXJlKG9wdGlvbnM6IFByZXZpb3VzbHlSZXNvbHZlZCk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhcmdzLnJlcXVlc3Q7XG4gICAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnNbXCJ4LWFtei1nbGFjaWVyLXZlcnNpb25cIl0gPSBvcHRpb25zLmFwaVZlcnNpb247XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBhZGRHbGFjaWVyQXBpVmVyc2lvbk1pZGRsZXdhcmVPcHRpb25zOiBCdWlsZEhhbmRsZXJPcHRpb25zID0ge1xuICBzdGVwOiBcImJ1aWxkXCIsXG4gIHRhZ3M6IFtcIlNFVF9HTEFDSUVSX1ZFUlNJT05cIl0sXG4gIG5hbWU6IFwiYWRkR2xhY2llckFwaVZlcnNpb25NaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcbiJdfQ==