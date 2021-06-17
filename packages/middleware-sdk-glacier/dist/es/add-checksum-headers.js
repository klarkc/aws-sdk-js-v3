import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export function addChecksumHeadersMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var request, headers, body, _a, contentHash, treeHash, _b, _c, _d, headerName, hash;
            var e_1, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        request = args.request;
                        if (!HttpRequest.isInstance(request)) return [3 /*break*/, 2];
                        headers = request.headers;
                        body = request.body;
                        if (!body) return [3 /*break*/, 2];
                        return [4 /*yield*/, options.bodyChecksumGenerator(request, options)];
                    case 1:
                        _a = __read.apply(void 0, [_g.sent(), 2]), contentHash = _a[0], treeHash = _a[1];
                        try {
                            for (_b = __values([
                                ["x-amz-content-sha256", contentHash],
                                ["x-amz-sha256-tree-hash", treeHash],
                            ]), _c = _b.next(); !_c.done; _c = _b.next()) {
                                _d = __read(_c.value, 2), headerName = _d[0], hash = _d[1];
                                if (!(headerName in headers) && hash) {
                                    headers = __assign(__assign({}, headers), (_f = {}, _f[headerName] = hash, _f));
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        // Update request headers with new set of headers.
                        request.headers = headers;
                        _g.label = 2;
                    case 2: return [2 /*return*/, next(__assign(__assign({}, args), { request: request }))];
                }
            });
        }); };
    };
}
export var addChecksumHeadersMiddlewareOptions = {
    step: "build",
    tags: ["SET_CHECKSUM_HEADERS"],
    name: "addChecksumHeadersMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNoZWNrc3VtLWhlYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRkLWNoZWNrc3VtLWhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVlyRCxNQUFNLFVBQVUsNEJBQTRCLENBQUMsT0FBMkI7SUFBeEUsaUJBZ0NDO0lBL0JDLE9BQU8sVUFBZ0MsSUFBK0I7UUFDcEUsT0FBQSxVQUFPLElBQWdDOzs7Ozs7d0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOzZCQUN6QixXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUEvQix3QkFBK0I7d0JBQzdCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO3dCQUN4QixJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs2QkFDdEIsSUFBSSxFQUFKLHdCQUFJO3dCQUMwQixxQkFBTSxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFBOzt3QkFBL0UsS0FBQSxzQkFBMEIsU0FBcUQsS0FBQSxFQUE5RSxXQUFXLFFBQUEsRUFBRSxRQUFRLFFBQUE7OzRCQUU1QixLQUFpQyxLQUFBLFNBQXlCO2dDQUN4RCxDQUFDLHNCQUFzQixFQUFFLFdBQVcsQ0FBQztnQ0FDckMsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUM7NkJBQ3JDLENBQUEsNENBQUU7Z0NBSFEsS0FBQSxtQkFBa0IsRUFBakIsVUFBVSxRQUFBLEVBQUUsSUFBSSxRQUFBO2dDQUkxQixJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO29DQUNwQyxPQUFPLHlCQUNGLE9BQU8sZ0JBQ1QsVUFBVSxJQUFHLElBQUksTUFDbkIsQ0FBQztpQ0FDSDs2QkFDRjs7Ozs7Ozs7O3dCQUVELGtEQUFrRDt3QkFDbEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7OzRCQUk5QixzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxPQUFPLFNBQUEsSUFDUCxFQUFDOzs7YUFDSjtJQTdCRCxDQTZCQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLG1DQUFtQyxHQUF3QjtJQUN0RSxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQzlCLElBQUksRUFBRSw4QkFBOEI7SUFDcEMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkSGFuZGxlck9wdGlvbnMsXG4gIEJ1aWxkSGFuZGxlck91dHB1dCxcbiAgQnVpbGRNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IFByZXZpb3VzbHlSZXNvbHZlZCB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDaGVja3N1bUhlYWRlcnNNaWRkbGV3YXJlKG9wdGlvbnM6IFByZXZpb3VzbHlSZXNvbHZlZCk6IEJ1aWxkTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+KTogQnVpbGRIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8QnVpbGRIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhcmdzLnJlcXVlc3Q7XG4gICAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycztcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcXVlc3QuYm9keTtcbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICBjb25zdCBbY29udGVudEhhc2gsIHRyZWVIYXNoXSA9IGF3YWl0IG9wdGlvbnMuYm9keUNoZWNrc3VtR2VuZXJhdG9yKHJlcXVlc3QsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgZm9yIChjb25zdCBbaGVhZGVyTmFtZSwgaGFzaF0gb2YgPEFycmF5PFtzdHJpbmcsIHN0cmluZ10+PltcbiAgICAgICAgICAgIFtcIngtYW16LWNvbnRlbnQtc2hhMjU2XCIsIGNvbnRlbnRIYXNoXSxcbiAgICAgICAgICAgIFtcIngtYW16LXNoYTI1Ni10cmVlLWhhc2hcIiwgdHJlZUhhc2hdLFxuICAgICAgICAgIF0pIHtcbiAgICAgICAgICAgIGlmICghKGhlYWRlck5hbWUgaW4gaGVhZGVycykgJiYgaGFzaCkge1xuICAgICAgICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgW2hlYWRlck5hbWVdOiBoYXNoLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVwZGF0ZSByZXF1ZXN0IGhlYWRlcnMgd2l0aCBuZXcgc2V0IG9mIGhlYWRlcnMuXG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgYWRkQ2hlY2tzdW1IZWFkZXJzTWlkZGxld2FyZU9wdGlvbnM6IEJ1aWxkSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiYnVpbGRcIixcbiAgdGFnczogW1wiU0VUX0NIRUNLU1VNX0hFQURFUlNcIl0sXG4gIG5hbWU6IFwiYWRkQ2hlY2tzdW1IZWFkZXJzTWlkZGxld2FyZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG4iXX0=