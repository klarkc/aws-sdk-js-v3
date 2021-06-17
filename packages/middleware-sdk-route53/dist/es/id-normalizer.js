import { __assign, __awaiter, __generator, __values } from "tslib";
import { IDENTIFIER_PREFIX_PATTERN } from "./constants";
var IDENTIFIER_PARAMETERS = ["DelegationSetId", "HostedZoneId", "Id"];
export function idNormalizerMiddleware() {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var input, IDENTIFIER_PARAMETERS_1, IDENTIFIER_PARAMETERS_1_1, paramName, param;
            var e_1, _a;
            return __generator(this, function (_b) {
                input = __assign({}, args.input);
                try {
                    for (IDENTIFIER_PARAMETERS_1 = __values(IDENTIFIER_PARAMETERS), IDENTIFIER_PARAMETERS_1_1 = IDENTIFIER_PARAMETERS_1.next(); !IDENTIFIER_PARAMETERS_1_1.done; IDENTIFIER_PARAMETERS_1_1 = IDENTIFIER_PARAMETERS_1.next()) {
                        paramName = IDENTIFIER_PARAMETERS_1_1.value;
                        param = input[paramName];
                        if (param) {
                            input[paramName] = param.replace(IDENTIFIER_PREFIX_PATTERN, "");
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (IDENTIFIER_PARAMETERS_1_1 && !IDENTIFIER_PARAMETERS_1_1.done && (_a = IDENTIFIER_PARAMETERS_1.return)) _a.call(IDENTIFIER_PARAMETERS_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { input: input }))];
            });
        }); };
    };
}
export var idNormalizerMiddlewareOptions = {
    step: "initialize",
    tags: ["ROUTE53_IDS"],
    name: "idNormalizerMiddleware",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export var getIdNormalizerPlugin = function (unused) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(idNormalizerMiddleware(), idNormalizerMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pZC1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFReEQsSUFBTSxxQkFBcUIsR0FBa0MsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdkcsTUFBTSxVQUFVLHNCQUFzQjtJQUF0QyxpQkFnQkM7SUFmQyxPQUFPLFVBQWdDLElBQW9DO1FBQ3pFLE9BQUEsVUFBTyxJQUFxQzs7OztnQkFDcEMsS0FBSyxnQkFBUyxJQUFJLENBQUMsS0FBYSxDQUFFLENBQUM7O29CQUN6QyxLQUF3QiwwQkFBQSxTQUFBLHFCQUFxQixDQUFBLDJKQUFFO3dCQUFwQyxTQUFTO3dCQUNaLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQy9CLElBQUksS0FBSyxFQUFFOzRCQUNULEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDO3lCQUNqRTtxQkFDRjs7Ozs7Ozs7O2dCQUVELHNCQUFPLElBQUksdUJBQ04sSUFBSSxLQUNQLEtBQUssT0FBQSxJQUNMLEVBQUM7O2FBQ0o7SUFiRCxDQWFDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQTZCO0lBQ3JFLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNyQixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLDZEQUE2RDtBQUM3RCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLE1BQVcsSUFBMEIsT0FBQSxDQUFDO0lBQzFFLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGLENBQUMsRUFKeUUsQ0FJekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBJREVOVElGSUVSX1BSRUZJWF9QQVRURVJOIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWRlbnRpZmllckJlYXJlciB7XG4gIERlbGVnYXRpb25TZXRJZD86IHN0cmluZztcbiAgSG9zdGVkWm9uZUlkPzogc3RyaW5nO1xuICBJZD86IHN0cmluZztcbn1cblxuY29uc3QgSURFTlRJRklFUl9QQVJBTUVURVJTOiBBcnJheTxrZXlvZiBJZGVudGlmaWVyQmVhcmVyPiA9IFtcIkRlbGVnYXRpb25TZXRJZFwiLCBcIkhvc3RlZFpvbmVJZFwiLCBcIklkXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaWROb3JtYWxpemVyTWlkZGxld2FyZSgpOiBJbml0aWFsaXplTWlkZGxld2FyZTxhbnksIGFueT4ge1xuICByZXR1cm4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihuZXh0OiBJbml0aWFsaXplSGFuZGxlcjxhbnksIE91dHB1dD4pOiBJbml0aWFsaXplSGFuZGxlcjxhbnksIE91dHB1dD4gPT5cbiAgICBhc3luYyAoYXJnczogSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHM8YW55Pik6IFByb21pc2U8SW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSB7IC4uLihhcmdzLmlucHV0IGFzIGFueSkgfTtcbiAgICAgIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIElERU5USUZJRVJfUEFSQU1FVEVSUykge1xuICAgICAgICBjb25zdCBwYXJhbSA9IGlucHV0W3BhcmFtTmFtZV07XG4gICAgICAgIGlmIChwYXJhbSkge1xuICAgICAgICAgIGlucHV0W3BhcmFtTmFtZV0gPSBwYXJhbS5yZXBsYWNlKElERU5USUZJRVJfUFJFRklYX1BBVFRFUk4sIFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgaW5wdXQsXG4gICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgaWROb3JtYWxpemVyTWlkZGxld2FyZU9wdGlvbnM6IEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyA9IHtcbiAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gIHRhZ3M6IFtcIlJPVVRFNTNfSURTXCJdLFxuICBuYW1lOiBcImlkTm9ybWFsaXplck1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgY29uc3QgZ2V0SWROb3JtYWxpemVyUGx1Z2luID0gKHVudXNlZDogYW55KTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChpZE5vcm1hbGl6ZXJNaWRkbGV3YXJlKCksIGlkTm9ybWFsaXplck1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19