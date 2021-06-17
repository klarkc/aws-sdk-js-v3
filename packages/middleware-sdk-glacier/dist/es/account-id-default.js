import { __assign, __awaiter, __generator } from "tslib";
export function accountIdDefaultMiddleware() {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var input;
            return __generator(this, function (_a) {
                input = args.input;
                if (input.accountId === undefined) {
                    input.accountId = "-";
                }
                return [2 /*return*/, next(__assign(__assign({}, args), { input: input }))];
            });
        }); };
    };
}
export var accountIdDefaultMiddlewareOptions = {
    step: "initialize",
    tags: ["ACCOUNT_ID_DEFAULT"],
    name: "accountIdDefaultMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1pZC1kZWZhdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjY291bnQtaWQtZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsTUFBTSxVQUFVLDBCQUEwQjtJQUExQyxpQkFTQztJQVJDLE9BQU8sVUFBZ0MsSUFBb0M7UUFDekUsT0FBQSxVQUFPLElBQXFDOzs7Z0JBQ2xDLEtBQUssR0FBSyxJQUFJLE1BQVQsQ0FBVTtnQkFDdkIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDakMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7aUJBQ3ZCO2dCQUNELHNCQUFPLElBQUksdUJBQU0sSUFBSSxLQUFFLEtBQUssT0FBQSxJQUFHLEVBQUM7O2FBQ2pDO0lBTkQsQ0FNQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLGlDQUFpQyxHQUE2QjtJQUN6RSxJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1QixJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluaXRpYWxpemVIYW5kbGVyLFxuICBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBJbml0aWFsaXplSGFuZGxlck91dHB1dCxcbiAgSW5pdGlhbGl6ZU1pZGRsZXdhcmUsXG4gIE1ldGFkYXRhQmVhcmVyLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjY291bnRJZERlZmF1bHRNaWRkbGV3YXJlKCk6IEluaXRpYWxpemVNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0Pik6IEluaXRpYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PlxuICAgIGFzeW5jIChhcmdzOiBJbml0aWFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgICBjb25zdCB7IGlucHV0IH0gPSBhcmdzO1xuICAgICAgaWYgKGlucHV0LmFjY291bnRJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlucHV0LmFjY291bnRJZCA9IFwiLVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQoeyAuLi5hcmdzLCBpbnB1dCB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgYWNjb3VudElkRGVmYXVsdE1pZGRsZXdhcmVPcHRpb25zOiBJbml0aWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICB0YWdzOiBbXCJBQ0NPVU5UX0lEX0RFRkFVTFRcIl0sXG4gIG5hbWU6IFwiYWNjb3VudElkRGVmYXVsdE1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuIl19