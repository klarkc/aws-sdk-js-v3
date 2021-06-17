import { __awaiter, __generator, __values } from "tslib";
import { idNormalizerMiddleware } from "./id-normalizer";
var prefixedProps = ["/hostedzone/ID", "/change/ID", "/delegationset/ID"];
var idParams = ["DelegationSetId", "HostedZoneId", "Id"];
describe("idNormalizerMiddleware", function () {
    var e_1, _a;
    var _loop_1 = function (paramName) {
        var e_2, _b;
        var _loop_2 = function (prefixed) {
            it("should strip the prefix from the " + paramName + " parameter", function () { return __awaiter(void 0, void 0, void 0, function () {
                var next, input, handler;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            next = jest.fn();
                            input = (_a = {}, _a[paramName] = prefixed, _a);
                            handler = idNormalizerMiddleware()(next, {});
                            return [4 /*yield*/, handler({ input: input })];
                        case 1:
                            _c.sent();
                            expect(next.mock.calls.length).toBe(1);
                            expect(next.mock.calls[0][0]).toEqual({
                                input: (_b = {}, _b[paramName] = "ID", _b),
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        try {
            for (var prefixedProps_1 = (e_2 = void 0, __values(prefixedProps)), prefixedProps_1_1 = prefixedProps_1.next(); !prefixedProps_1_1.done; prefixedProps_1_1 = prefixedProps_1.next()) {
                var prefixed = prefixedProps_1_1.value;
                _loop_2(prefixed);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (prefixedProps_1_1 && !prefixedProps_1_1.done && (_b = prefixedProps_1.return)) _b.call(prefixedProps_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    try {
        for (var idParams_1 = __values(idParams), idParams_1_1 = idParams_1.next(); !idParams_1_1.done; idParams_1_1 = idParams_1.next()) {
            var paramName = idParams_1_1.value;
            _loop_1(paramName);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (idParams_1_1 && !idParams_1_1.done && (_a = idParams_1.return)) _a.call(idParams_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQtbm9ybWFsaXplci1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lkLW5vcm1hbGl6ZXItc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsSUFBTSxhQUFhLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUM1RSxJQUFNLFFBQVEsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUzRCxRQUFRLENBQUMsd0JBQXdCLEVBQUU7OzRCQUN0QixTQUFTOztnQ0FDUCxRQUFRO1lBQ2pCLEVBQUUsQ0FBQyxzQ0FBb0MsU0FBUyxlQUFZLEVBQUU7Ozs7Ozs0QkFDdEQsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDakIsS0FBSyxhQUFLLEdBQUMsU0FBUyxJQUFHLFFBQVEsS0FBRSxDQUFDOzRCQUVsQyxPQUFPLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBUyxDQUFDLENBQUM7NEJBRTFELHFCQUFNLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQTs7NEJBQXhCLFNBQXdCLENBQUM7NEJBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQ0FDcEMsS0FBSyxZQUFJLEdBQUMsU0FBUyxJQUFHLElBQUksS0FBRTs2QkFDN0IsQ0FBQyxDQUFDOzs7O2lCQUNKLENBQUMsQ0FBQzs7O1lBYkwsS0FBdUIsSUFBQSxpQ0FBQSxTQUFBLGFBQWEsQ0FBQSxDQUFBLDRDQUFBO2dCQUEvQixJQUFNLFFBQVEsMEJBQUE7d0JBQVIsUUFBUTthQWNsQjs7Ozs7Ozs7Ozs7UUFmSCxLQUF3QixJQUFBLGFBQUEsU0FBQSxRQUFRLENBQUEsa0NBQUE7WUFBM0IsSUFBTSxTQUFTLHFCQUFBO29CQUFULFNBQVM7U0FnQm5COzs7Ozs7Ozs7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlkTm9ybWFsaXplck1pZGRsZXdhcmUgfSBmcm9tIFwiLi9pZC1ub3JtYWxpemVyXCI7XG5cbmNvbnN0IHByZWZpeGVkUHJvcHMgPSBbXCIvaG9zdGVkem9uZS9JRFwiLCBcIi9jaGFuZ2UvSURcIiwgXCIvZGVsZWdhdGlvbnNldC9JRFwiXTtcbmNvbnN0IGlkUGFyYW1zID0gW1wiRGVsZWdhdGlvblNldElkXCIsIFwiSG9zdGVkWm9uZUlkXCIsIFwiSWRcIl07XG5cbmRlc2NyaWJlKFwiaWROb3JtYWxpemVyTWlkZGxld2FyZVwiLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIGlkUGFyYW1zKSB7XG4gICAgZm9yIChjb25zdCBwcmVmaXhlZCBvZiBwcmVmaXhlZFByb3BzKSB7XG4gICAgICBpdChgc2hvdWxkIHN0cmlwIHRoZSBwcmVmaXggZnJvbSB0aGUgJHtwYXJhbU5hbWV9IHBhcmFtZXRlcmAsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IGplc3QuZm4oKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB7IFtwYXJhbU5hbWVdOiBwcmVmaXhlZCB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBpZE5vcm1hbGl6ZXJNaWRkbGV3YXJlKCkobmV4dCwge30gYXMgYW55KTtcblxuICAgICAgICBhd2FpdCBoYW5kbGVyKHsgaW5wdXQgfSk7XG5cbiAgICAgICAgZXhwZWN0KG5leHQubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChuZXh0Lm1vY2suY2FsbHNbMF1bMF0pLnRvRXF1YWwoe1xuICAgICAgICAgIGlucHV0OiB7IFtwYXJhbU5hbWVdOiBcIklEXCIgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19