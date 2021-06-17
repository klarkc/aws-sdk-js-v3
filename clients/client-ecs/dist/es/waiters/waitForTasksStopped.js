import { __assign, __awaiter, __generator, __read, __spreadArray, __values } from "tslib";
import { DescribeTasksCommand } from "../commands/DescribeTasksCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) { return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, allStringEq_5, _a, _b, element_4, exception_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.send(new DescribeTasksCommand(input))];
            case 1:
                result_1 = _d.sent();
                reason = result_1;
                try {
                    returnComparator = function () {
                        var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.tasks)));
                        var projection_3 = flat_1.map(function (element_2) {
                            return element_2.lastStatus;
                        });
                        return projection_3;
                    };
                    allStringEq_5 = returnComparator().length > 0;
                    try {
                        for (_a = __values(returnComparator()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            element_4 = _b.value;
                            allStringEq_5 = allStringEq_5 && element_4 == "STOPPED";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (allStringEq_5) {
                        return [2 /*return*/, { state: WaiterState.SUCCESS, reason: reason }];
                    }
                }
                catch (e) { }
                return [3 /*break*/, 3];
            case 2:
                exception_1 = _d.sent();
                reason = exception_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
        }
    });
}); };
/**
 *
 *  @deprecated Use waitUntilTasksStopped instead. waitForTasksStopped does not throw error in non-success cases.
 */
export var waitForTasksStopped = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
        serviceDefaults = { minDelay: 6, maxDelay: 120 };
        return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
}); };
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTasksCommand for polling.
 */
export var waitUntilTasksStopped = function (params, input) { return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceDefaults = { minDelay: 6, maxDelay: 120 };
                return [4 /*yield*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, checkExceptions(result)];
        }
    });
}); };
//# sourceMappingURL=waitForTasksStopped.js.map