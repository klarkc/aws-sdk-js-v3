import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
import { DescribeInstancesCommand } from "../commands/DescribeInstancesCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, allStringEq_8, _a, _b, element_7, returnComparator, _c, _d, anyStringEq_7, returnComparator, _e, _f, anyStringEq_7, exception_1;
    var e_1, _g, e_2, _h, e_3, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _k.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.send(new DescribeInstancesCommand(input))];
            case 1:
                result_1 = _k.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Reservations)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Instances;
                        });
                        var flat_4 = [].concat.apply([], __spreadArray([], __read(projection_3)));
                        var projection_6 = flat_4.map(function (element_5) {
                            return element_5.State.Name;
                        });
                        return projection_6;
                    };
                    allStringEq_8 = returnComparator().length > 0;
                    try {
                        for (_a = __values(returnComparator()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            element_7 = _b.value;
                            allStringEq_8 = allStringEq_8 && element_7 == "stopped";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (allStringEq_8) {
                        return [2 /*return*/, { state: WaiterState.SUCCESS, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Reservations)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Instances;
                        });
                        var flat_4 = [].concat.apply([], __spreadArray([], __read(projection_3)));
                        var projection_6 = flat_4.map(function (element_5) {
                            return element_5.State.Name;
                        });
                        return projection_6;
                    };
                    try {
                        for (_c = __values(returnComparator()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            anyStringEq_7 = _d.value;
                            if (anyStringEq_7 == "pending") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Reservations)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Instances;
                        });
                        var flat_4 = [].concat.apply([], __spreadArray([], __read(projection_3)));
                        var projection_6 = flat_4.map(function (element_5) {
                            return element_5.State.Name;
                        });
                        return projection_6;
                    };
                    try {
                        for (_e = __values(returnComparator()), _f = _e.next(); !_f.done; _f = _e.next()) {
                            anyStringEq_7 = _f.value;
                            if (anyStringEq_7 == "terminated") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                catch (e) { }
                return [3 /*break*/, 3];
            case 2:
                exception_1 = _k.sent();
                reason = exception_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
/**
 *
 *  @deprecated Use waitUntilInstanceStopped instead. waitForInstanceStopped does not throw error in non-success cases.
 */
export var waitForInstanceStopped = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 15, maxDelay: 120 };
        return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export var waitUntilInstanceStopped = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceDefaults = { minDelay: 15, maxDelay: 120 };
                return [4 /*yield*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, checkExceptions(result)];
        }
    });
}); };
//# sourceMappingURL=waitForInstanceStopped.js.map