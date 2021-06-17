import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export var eventStreamHeaderMiddleware = function (next) { return function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var request;
    return __generator(this, function (_a) {
        request = args.request;
        if (!HttpRequest.isInstance(request))
            return [2 /*return*/, next(args)];
        request.headers = __assign(__assign({}, request.headers), { "Content-Type": "application/vnd.amazon.eventstream", "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS" });
        return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
    });
}); }; };
export var eventStreamHeaderMiddlewareOptions = {
    step: "build",
    tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
    name: "eventStreamHeaderMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy1taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlYWRlcnMtbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUE4QixVQUFDLElBQUksSUFBSyxPQUFBLFVBQU8sSUFBSTs7O1FBQ2pGLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFBRSxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFDeEQsT0FBTyxDQUFDLE9BQU8seUJBQ1YsT0FBTyxDQUFDLE9BQU8sS0FDbEIsY0FBYyxFQUFFLG9DQUFvQyxFQUNwRCxzQkFBc0IsRUFBRSxtQ0FBbUMsR0FDNUQsQ0FBQztRQUNGLHNCQUFPLElBQUksdUJBQ04sSUFBSSxLQUNQLE9BQU8sU0FBQSxJQUNQLEVBQUM7O0tBQ0osRUFaK0UsQ0FZL0UsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGtDQUFrQyxHQUF3QjtJQUNyRSxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO0lBQ2xFLElBQUksRUFBRSw2QkFBNkI7SUFDbkMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgQnVpbGRIYW5kbGVyT3B0aW9ucywgQnVpbGRNaWRkbGV3YXJlIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5leHBvcnQgY29uc3QgZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlOiBCdWlsZE1pZGRsZXdhcmU8YW55LCBhbnk+ID0gKG5leHQpID0+IGFzeW5jIChhcmdzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgaWYgKCFIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSByZXR1cm4gbmV4dChhcmdzKTtcbiAgcmVxdWVzdC5oZWFkZXJzID0ge1xuICAgIC4uLnJlcXVlc3QuaGVhZGVycyxcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZXZlbnRzdHJlYW1cIixcbiAgICBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI6IFwiU1RSRUFNSU5HLUFXUzQtSE1BQy1TSEEyNTYtRVZFTlRTXCIsXG4gIH07XG4gIHJldHVybiBuZXh0KHtcbiAgICAuLi5hcmdzLFxuICAgIHJlcXVlc3QsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50U3RyZWFtSGVhZGVyTWlkZGxld2FyZU9wdGlvbnM6IEJ1aWxkSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiYnVpbGRcIixcbiAgdGFnczogW1wiRVZFTlRfU1RSRUFNXCIsIFwiSEVBREVSXCIsIFwiQ09OVEVOVF9UWVBFXCIsIFwiQ09OVEVOVF9TSEEyNTZcIl0sXG4gIG5hbWU6IFwiZXZlbnRTdHJlYW1IZWFkZXJNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcbiJdfQ==