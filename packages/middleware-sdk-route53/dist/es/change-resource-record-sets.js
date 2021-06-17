import { __assign, __awaiter, __generator, __values } from "tslib";
import { IDENTIFIER_PREFIX_PATTERN } from "./constants";
export function changeResourceRecordSetsMiddleware() {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var ChangeBatch, Changes, _a, _b, change, AliasTarget;
            var e_1, _c;
            return __generator(this, function (_d) {
                ChangeBatch = args.input.ChangeBatch;
                Changes = [];
                try {
                    for (_a = __values(ChangeBatch.Changes), _b = _a.next(); !_b.done; _b = _a.next()) {
                        change = _b.value;
                        AliasTarget = change.ResourceRecordSet.AliasTarget;
                        if (AliasTarget) {
                            Changes.push(__assign(__assign({}, change), { ResourceRecordSet: __assign(__assign({}, change.ResourceRecordSet), { AliasTarget: __assign(__assign({}, AliasTarget), { HostedZoneId: AliasTarget.HostedZoneId.replace(IDENTIFIER_PREFIX_PATTERN, "") }) }) }));
                        }
                        else {
                            Changes.push(change);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { input: __assign(__assign({}, args.input), { ChangeBatch: __assign(__assign({}, ChangeBatch), { Changes: Changes }) }) }))];
            });
        }); };
    };
}
export var changeResourceRecordSetsMiddlewareOptions = {
    step: "initialize",
    tags: ["ROUTE53_IDS", "CHANGE_RESOURCE_RECORD_SETS"],
    name: "changeResourceRecordSetsMiddleware",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export var getChangeResourceRecordSetsPlugin = function (unused) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(changeResourceRecordSetsMiddleware(), changeResourceRecordSetsMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXJlc291cmNlLXJlY29yZC1zZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NoYW5nZS1yZXNvdXJjZS1yZWNvcmQtc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBVUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZ0J4RCxNQUFNLFVBQVUsa0NBQWtDO0lBQWxELGlCQWtDQztJQWpDQyxPQUFPLFVBQWdDLElBQW9DO1FBQ3pFLE9BQUEsVUFBTyxJQUFxQzs7OztnQkFDbEMsV0FBVyxHQUFLLElBQUksQ0FBQyxLQUFLLFlBQWYsQ0FBZ0I7Z0JBQzdCLE9BQU8sR0FBa0IsRUFBRSxDQUFDOztvQkFDbEMsS0FBcUIsS0FBQSxTQUFBLFdBQVcsQ0FBQyxPQUFPLENBQUEsNENBQUU7d0JBQS9CLE1BQU07d0JBQ1AsV0FBVyxHQUFLLE1BQU0sQ0FBQyxpQkFBaUIsWUFBN0IsQ0FBOEI7d0JBQ2pELElBQUksV0FBVyxFQUFFOzRCQUNmLE9BQU8sQ0FBQyxJQUFJLHVCQUNQLE1BQU0sS0FDVCxpQkFBaUIsd0JBQ1osTUFBTSxDQUFDLGlCQUFpQixLQUMzQixXQUFXLHdCQUNOLFdBQVcsS0FDZCxZQUFZLEVBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLFVBR2pGLENBQUM7eUJBQ0o7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDdEI7cUJBQ0Y7Ozs7Ozs7OztnQkFFRCxzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxLQUFLLHdCQUNDLElBQUksQ0FBQyxLQUFhLEtBQ3RCLFdBQVcsd0JBQ04sV0FBVyxLQUNkLE9BQU8sU0FBQSxVQUdYLEVBQUM7O2FBQ0o7SUEvQkQsQ0ErQkMsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSx5Q0FBeUMsR0FBNkI7SUFDakYsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLDZCQUE2QixDQUFDO0lBQ3BELElBQUksRUFBRSxvQ0FBb0M7SUFDMUMsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRUYsNkRBQTZEO0FBQzdELE1BQU0sQ0FBQyxJQUFNLGlDQUFpQyxHQUFHLFVBQUMsTUFBVyxJQUEwQixPQUFBLENBQUM7SUFDdEYsWUFBWSxFQUFFLFVBQUMsV0FBVztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUseUNBQXlDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0NBQ0YsQ0FBQyxFQUpxRixDQUlyRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5pdGlhbGl6ZUhhbmRsZXIsXG4gIEluaXRpYWxpemVIYW5kbGVyQXJndW1lbnRzLFxuICBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3V0cHV0LFxuICBJbml0aWFsaXplTWlkZGxld2FyZSxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IElERU5USUZJRVJfUFJFRklYX1BBVFRFUk4gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2Uge1xuICBSZXNvdXJjZVJlY29yZFNldDoge1xuICAgIEFsaWFzVGFyZ2V0Pzoge1xuICAgICAgSG9zdGVkWm9uZUlkOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VCYXRjaEJlYXJlciB7XG4gIENoYW5nZUJhdGNoOiB7XG4gICAgQ2hhbmdlczogSXRlcmFibGU8Q2hhbmdlPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJlc291cmNlUmVjb3JkU2V0c01pZGRsZXdhcmUoKTogSW5pdGlhbGl6ZU1pZGRsZXdhcmU8YW55LCBhbnk+IHtcbiAgcmV0dXJuIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4obmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+KTogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gICAgYXN5bmMgKGFyZ3M6IEluaXRpYWxpemVIYW5kbGVyQXJndW1lbnRzPGFueT4pOiBQcm9taXNlPEluaXRpYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgQ2hhbmdlQmF0Y2ggfSA9IGFyZ3MuaW5wdXQ7XG4gICAgICBjb25zdCBDaGFuZ2VzOiBBcnJheTxDaGFuZ2U+ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBDaGFuZ2VCYXRjaC5DaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHsgQWxpYXNUYXJnZXQgfSA9IGNoYW5nZS5SZXNvdXJjZVJlY29yZFNldDtcbiAgICAgICAgaWYgKEFsaWFzVGFyZ2V0KSB7XG4gICAgICAgICAgQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgIC4uLmNoYW5nZSxcbiAgICAgICAgICAgIFJlc291cmNlUmVjb3JkU2V0OiB7XG4gICAgICAgICAgICAgIC4uLmNoYW5nZS5SZXNvdXJjZVJlY29yZFNldCxcbiAgICAgICAgICAgICAgQWxpYXNUYXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAuLi5BbGlhc1RhcmdldCxcbiAgICAgICAgICAgICAgICBIb3N0ZWRab25lSWQ6IEFsaWFzVGFyZ2V0Lkhvc3RlZFpvbmVJZC5yZXBsYWNlKElERU5USUZJRVJfUFJFRklYX1BBVFRFUk4sIFwiXCIpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBDaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgLi4uKGFyZ3MuaW5wdXQgYXMgYW55KSxcbiAgICAgICAgICBDaGFuZ2VCYXRjaDoge1xuICAgICAgICAgICAgLi4uQ2hhbmdlQmF0Y2gsXG4gICAgICAgICAgICBDaGFuZ2VzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlUmVzb3VyY2VSZWNvcmRTZXRzTWlkZGxld2FyZU9wdGlvbnM6IEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gIHRhZ3M6IFtcIlJPVVRFNTNfSURTXCIsIFwiQ0hBTkdFX1JFU09VUkNFX1JFQ09SRF9TRVRTXCJdLFxuICBuYW1lOiBcImNoYW5nZVJlc291cmNlUmVjb3JkU2V0c01pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgY29uc3QgZ2V0Q2hhbmdlUmVzb3VyY2VSZWNvcmRTZXRzUGx1Z2luID0gKHVudXNlZDogYW55KTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChjaGFuZ2VSZXNvdXJjZVJlY29yZFNldHNNaWRkbGV3YXJlKCksIGNoYW5nZVJlc291cmNlUmVjb3JkU2V0c01pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19