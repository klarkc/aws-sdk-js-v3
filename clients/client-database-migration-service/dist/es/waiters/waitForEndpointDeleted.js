import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
import { DescribeEndpointsCommand } from "../commands/DescribeEndpointsCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, _a, _b, anyStringEq_4, returnComparator, _c, _d, anyStringEq_4, exception_1;
    var e_1, _e, e_2, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.send(new DescribeEndpointsCommand(input))];
            case 1:
                result_1 = _g.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Endpoints)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_a = __values(returnComparator()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            anyStringEq_4 = _b.value;
                            if (anyStringEq_4 == "active") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Endpoints)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_c = __values(returnComparator()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            anyStringEq_4 = _d.value;
                            if (anyStringEq_4 == "creating") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                catch (e) { }
                return [3 /*break*/, 3];
            case 2:
                exception_1 = _g.sent();
                reason = exception_1;
                if (exception_1.name && exception_1.name == "ResourceNotFoundFault") {
                    return [2 /*return*/, { state: WaiterState.SUCCESS, reason: reason }];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
/**
 * Wait until testing endpoint is deleted.
 *  @deprecated Use waitUntilEndpointDeleted instead. waitForEndpointDeleted does not throw error in non-success cases.
 */
export var waitForEndpointDeleted = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 5, maxDelay: 120 };
        return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
/**
 * Wait until testing endpoint is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEndpointsCommand for polling.
 */
export var waitUntilEndpointDeleted = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceDefaults = { minDelay: 5, maxDelay: 120 };
                return [4 /*yield*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, checkExceptions(result)];
        }
    });
}); };
//# sourceMappingURL=waitForEndpointDeleted.js.map