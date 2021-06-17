import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
import { DescribeDBInstancesCommand } from "../commands/DescribeDBInstancesCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, allStringEq_5, _a, _b, element_4, returnComparator, _c, _d, anyStringEq_4, returnComparator, _e, _f, anyStringEq_4, returnComparator, _g, _h, anyStringEq_4, returnComparator, _j, _k, anyStringEq_4, returnComparator, _l, _m, anyStringEq_4, exception_1;
    var e_1, _o, e_2, _p, e_3, _q, e_4, _r, e_5, _s, e_6, _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _u.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.send(new DescribeDBInstancesCommand(input))];
            case 1:
                result_1 = _u.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.DBInstances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.DBInstanceStatus;
                        });
                        return projection_3;
                    };
                    allStringEq_5 = returnComparator().length > 0;
                    try {
                        for (_a = __values(returnComparator()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            element_4 = _b.value;
                            allStringEq_5 = allStringEq_5 && element_4 == "available";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_o = _a.return)) _o.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (allStringEq_5) {
                        return [2 /*return*/, { state: WaiterState.SUCCESS, reason: reason }];
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.DBInstances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.DBInstanceStatus;
                        });
                        return projection_3;
                    };
                    try {
                        for (_c = __values(returnComparator()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            anyStringEq_4 = _d.value;
                            if (anyStringEq_4 == "deleted") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_p = _c.return)) _p.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.DBInstances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.DBInstanceStatus;
                        });
                        return projection_3;
                    };
                    try {
                        for (_e = __values(returnComparator()), _f = _e.next(); !_f.done; _f = _e.next()) {
                            anyStringEq_4 = _f.value;
                            if (anyStringEq_4 == "deleting") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_q = _e.return)) _q.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.DBInstances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.DBInstanceStatus;
                        });
                        return projection_3;
                    };
                    try {
                        for (_g = __values(returnComparator()), _h = _g.next(); !_h.done; _h = _g.next()) {
                            anyStringEq_4 = _h.value;
                            if (anyStringEq_4 == "failed") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_h && !_h.done && (_r = _g.return)) _r.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.DBInstances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.DBInstanceStatus;
                        });
                        return projection_3;
                    };
                    try {
                        for (_j = __values(returnComparator()), _k = _j.next(); !_k.done; _k = _j.next()) {
                            anyStringEq_4 = _k.value;
                            if (anyStringEq_4 == "incompatible-restore") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_s = _j.return)) _s.call(_j);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.DBInstances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.DBInstanceStatus;
                        });
                        return projection_3;
                    };
                    try {
                        for (_l = __values(returnComparator()), _m = _l.next(); !_m.done; _m = _l.next()) {
                            anyStringEq_4 = _m.value;
                            if (anyStringEq_4 == "incompatible-parameters") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_t = _l.return)) _t.call(_l);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                catch (e) { }
                return [3 /*break*/, 3];
            case 2:
                exception_1 = _u.sent();
                reason = exception_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
/**
 *
 *  @deprecated Use waitUntilDBInstanceAvailable instead. waitForDBInstanceAvailable does not throw error in non-success cases.
 */
export var waitForDBInstanceAvailable = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 30, maxDelay: 120 };
        return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDBInstancesCommand for polling.
 */
export var waitUntilDBInstanceAvailable = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceDefaults = { minDelay: 30, maxDelay: 120 };
                return [4 /*yield*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, checkExceptions(result)];
        }
    });
}); };
//# sourceMappingURL=waitForDBInstanceAvailable.js.map