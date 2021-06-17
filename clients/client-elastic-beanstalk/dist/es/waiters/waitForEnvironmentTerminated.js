import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
import { DescribeEnvironmentsCommand } from "../commands/DescribeEnvironmentsCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, allStringEq_5, _a, _b, element_4, returnComparator, allStringEq_5, _c, _d, element_4, exception_1;
    var e_1, _e, e_2, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.send(new DescribeEnvironmentsCommand(input))];
            case 1:
                result_1 = _g.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Environments)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    allStringEq_5 = returnComparator().length > 0;
                    try {
                        for (_a = __values(returnComparator()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            element_4 = _b.value;
                            allStringEq_5 = allStringEq_5 && element_4 == "Terminated";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
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
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.Environments)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.Status;
                        });
                        return projection_3;
                    };
                    allStringEq_5 = returnComparator().length > 0;
                    try {
                        for (_c = __values(returnComparator()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            element_4 = _d.value;
                            allStringEq_5 = allStringEq_5 && element_4 == "Terminating";
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (allStringEq_5) {
                        return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
                    }
                }
                catch (e) { }
                return [3 /*break*/, 3];
            case 2:
                exception_1 = _g.sent();
                reason = exception_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
/**
 *
 *  @deprecated Use waitUntilEnvironmentTerminated instead. waitForEnvironmentTerminated does not throw error in non-success cases.
 */
export var waitForEnvironmentTerminated = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 20, maxDelay: 120 };
        return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEnvironmentsCommand for polling.
 */
export var waitUntilEnvironmentTerminated = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceDefaults = { minDelay: 20, maxDelay: 120 };
                return [4 /*yield*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, checkExceptions(result)];
        }
    });
}); };
//# sourceMappingURL=waitForEnvironmentTerminated.js.map