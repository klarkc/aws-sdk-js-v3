import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
import { DescribeInstancesCommand } from "../commands/DescribeInstancesCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, allStringEq_5, _a, _b, element_4, returnComparator, _c, _d, anyStringEq_4, returnComparator, _e, _f, anyStringEq_4, returnComparator, _g, _h, anyStringEq_4, returnComparator, _j, _k, anyStringEq_4, returnComparator, _l, _m, anyStringEq_4, returnComparator, _o, _p, anyStringEq_4, returnComparator, _q, _r, anyStringEq_4, returnComparator, _s, _t, anyStringEq_4, exception_1;
    var e_1, _u, e_2, _v, e_3, _w, e_4, _x, e_5, _y, e_6, _z, e_7, _0, e_8, _1, e_9, _2;
    return __generator(this, function (_3) {
        switch (_3.label) {
            case 0:
                _3.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.send(new DescribeInstancesCommand(input))];
            case 1:
                result_1 = _3.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    allStringEq_5 = returnComparator().length > 0;
                    try {
                        for (_a = __values(returnComparator()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            element_4 = _b.value;
                            allStringEq_5 = allStringEq_5 && element_4 == "online";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_u = _a.return)) _u.call(_a);
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
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_c = __values(returnComparator()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            anyStringEq_4 = _d.value;
                            if (anyStringEq_4 == "setup_failed") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_v = _c.return)) _v.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_e = __values(returnComparator()), _f = _e.next(); !_f.done; _f = _e.next()) {
                            anyStringEq_4 = _f.value;
                            if (anyStringEq_4 == "shutting_down") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_w = _e.return)) _w.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_g = __values(returnComparator()), _h = _g.next(); !_h.done; _h = _g.next()) {
                            anyStringEq_4 = _h.value;
                            if (anyStringEq_4 == "start_failed") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_h && !_h.done && (_x = _g.return)) _x.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_j = __values(returnComparator()), _k = _j.next(); !_k.done; _k = _j.next()) {
                            anyStringEq_4 = _k.value;
                            if (anyStringEq_4 == "stopped") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_y = _j.return)) _y.call(_j);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_l = __values(returnComparator()), _m = _l.next(); !_m.done; _m = _l.next()) {
                            anyStringEq_4 = _m.value;
                            if (anyStringEq_4 == "stopping") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_z = _l.return)) _z.call(_l);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_o = __values(returnComparator()), _p = _o.next(); !_p.done; _p = _o.next()) {
                            anyStringEq_4 = _p.value;
                            if (anyStringEq_4 == "terminating") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_p && !_p.done && (_0 = _o.return)) _0.call(_o);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_q = __values(returnComparator()), _r = _q.next(); !_r.done; _r = _q.next()) {
                            anyStringEq_4 = _r.value;
                            if (anyStringEq_4 == "terminated") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_r && !_r.done && (_1 = _q.return)) _1.call(_q);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
                catch (e) { }
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Instances)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    try {
                        for (_s = __values(returnComparator()), _t = _s.next(); !_t.done; _t = _s.next()) {
                            anyStringEq_4 = _t.value;
                            if (anyStringEq_4 == "stop_failed") {
                                return [2 /*return*/, { state: WaiterState.FAILURE, reason: reason }];
                            }
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (_t && !_t.done && (_2 = _s.return)) _2.call(_s);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                }
                catch (e) { }
                return [3 /*break*/, 3];
            case 2:
                exception_1 = _3.sent();
                reason = exception_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
/**
 * Wait until OpsWorks instance is online.
 *  @deprecated Use waitUntilInstanceOnline instead. waitForInstanceOnline does not throw error in non-success cases.
 */
export var waitForInstanceOnline = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 15, maxDelay: 120 };
        return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
/**
 * Wait until OpsWorks instance is online.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export var waitUntilInstanceOnline = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
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
//# sourceMappingURL=waitForInstanceOnline.js.map