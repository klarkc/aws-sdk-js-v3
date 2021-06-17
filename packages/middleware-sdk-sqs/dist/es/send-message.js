import { __assign, __awaiter, __generator } from "tslib";
import { toHex } from "@aws-sdk/util-hex-encoding";
export var sendMessageMiddleware = function (options) {
    return function (next) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var resp, output, hash, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, next(__assign({}, args))];
                    case 1:
                        resp = _c.sent();
                        output = resp.output;
                        hash = new options.md5();
                        hash.update(args.input.MessageBody || "");
                        _a = output.MD5OfMessageBody;
                        _b = toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 2:
                        if (_a !== _b.apply(void 0, [_c.sent()])) {
                            throw new Error("InvalidChecksumError");
                        }
                        return [2 /*return*/, resp];
                }
            });
        }); };
    };
};
export var sendMessageMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BODY_MD5"],
    name: "sendMessageMiddleware",
    override: true,
};
export var getSendMessagePlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(sendMessageMiddleware(config), sendMessageMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlbmQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUW5ELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUNoQyxVQUFDLE9BQTJCO0lBQzVCLE9BQUEsVUFBZ0MsSUFBb0M7UUFDcEUsT0FBQSxVQUFPLElBQXFDOzs7OzRCQUM3QixxQkFBTSxJQUFJLGNBQU0sSUFBSSxFQUFHLEVBQUE7O3dCQUE5QixJQUFJLEdBQUcsU0FBdUI7d0JBQzlCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBMkIsQ0FBQzt3QkFDMUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUN0QyxLQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTt3QkFBSyxLQUFBLEtBQUssQ0FBQTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUF6RCxJQUFJLE9BQTRCLGtCQUFNLFNBQW1CLEVBQUMsRUFBRTs0QkFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3lCQUN6Qzt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7OzthQUNiO0lBVEQsQ0FTQztBQVZELENBVUMsQ0FBQztBQUVKLE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUE2QjtJQUNwRSxJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUMzQixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLFVBQUMsTUFBMEIsSUFBMEIsT0FBQSxDQUFDO0lBQ3hGLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Q0FDRixDQUFDLEVBSnVGLENBSXZGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEluaXRpYWxpemVNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5cbmltcG9ydCB7IFByZXZpb3VzbHlSZXNvbHZlZCB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5cbmludGVyZmFjZSBTZW5kTWVzc2FnZVJlc3VsdCB7XG4gIE1ENU9mTWVzc2FnZUJvZHk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZU1pZGRsZXdhcmUgPVxuICAob3B0aW9uczogUHJldmlvdXNseVJlc29sdmVkKTogSW5pdGlhbGl6ZU1pZGRsZXdhcmU8YW55LCBhbnk+ID0+XG4gIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4obmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+KTogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gIGFzeW5jIChhcmdzOiBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IG5leHQoeyAuLi5hcmdzIH0pO1xuICAgIGNvbnN0IG91dHB1dCA9IHJlc3Aub3V0cHV0IGFzIFNlbmRNZXNzYWdlUmVzdWx0O1xuICAgIGNvbnN0IGhhc2ggPSBuZXcgb3B0aW9ucy5tZDUoKTtcbiAgICBoYXNoLnVwZGF0ZShhcmdzLmlucHV0Lk1lc3NhZ2VCb2R5IHx8IFwiXCIpO1xuICAgIGlmIChvdXRwdXQuTUQ1T2ZNZXNzYWdlQm9keSAhPT0gdG9IZXgoYXdhaXQgaGFzaC5kaWdlc3QoKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWRDaGVja3N1bUVycm9yXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcDtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlTWlkZGxld2FyZU9wdGlvbnM6IEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gIHRhZ3M6IFtcIlZBTElEQVRFX0JPRFlfTUQ1XCJdLFxuICBuYW1lOiBcInNlbmRNZXNzYWdlTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZW5kTWVzc2FnZVBsdWdpbiA9IChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoc2VuZE1lc3NhZ2VNaWRkbGV3YXJlKGNvbmZpZyksIHNlbmRNZXNzYWdlTWlkZGxld2FyZU9wdGlvbnMpO1xuICB9LFxufSk7XG4iXX0=