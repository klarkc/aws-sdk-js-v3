import { __assign, __awaiter, __generator, __read, __spreadArray } from "tslib";
import { DescribeAutoScalingGroupsCommand } from "../commands/DescribeAutoScalingGroupsCommand";
import { WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";
var checkState = function (client, input) {
  return __awaiter(void 0, void 0, void 0, function () {
    var reason, result_1, returnComparator, returnComparator, exception_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4 /*yield*/, client.send(new DescribeAutoScalingGroupsCommand(input))];
        case 1:
          result_1 = _a.sent();
          reason = result_1;
          try {
            returnComparator = function () {
              var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.AutoScalingGroups)));
              var projection_3 = flat_1.map(function (element_2) {
                var filterRes_5 = element_2.Instances.filter(function (element_4) {
                  return element_4.LifecycleState == "InService";
                });
                var result_6 = [];
                result_6.push(filterRes_5.length >= element_2.MinSize);
                element_2 = result_6;
                return element_2;
              });
              var flat_7 = [].concat.apply([], __spreadArray([], __read(projection_3)));
              return flat_7.includes(false);
            };
            if (returnComparator() == false) {
              return [2 /*return*/, { state: WaiterState.SUCCESS, reason: reason }];
            }
          } catch (e) {}
          try {
            returnComparator = function () {
              var flat_1 = [].concat.apply([], __spreadArray([], __read(result_1.AutoScalingGroups)));
              var projection_3 = flat_1.map(function (element_2) {
                var filterRes_5 = element_2.Instances.filter(function (element_4) {
                  return element_4.LifecycleState == "InService";
                });
                var result_6 = [];
                result_6.push(filterRes_5.length >= element_2.MinSize);
                element_2 = result_6;
                return element_2;
              });
              var flat_7 = [].concat.apply([], __spreadArray([], __read(projection_3)));
              return flat_7.includes(false);
            };
            if (returnComparator() == true) {
              return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
            }
          } catch (e) {}
          return [3 /*break*/, 3];
        case 2:
          exception_1 = _a.sent();
          reason = exception_1;
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/, { state: WaiterState.RETRY, reason: reason }];
      }
    });
  });
};
/**
 *
 *  @deprecated Use waitUntilGroupInService instead. waitForGroupInService does not throw error in non-success cases.
 */
export var waitForGroupInService = function (params, input) {
  return __awaiter(void 0, void 0, void 0, function () {
    var serviceDefaults;
    return __generator(this, function (_a) {
      serviceDefaults = { minDelay: 15, maxDelay: 120 };
      return [2 /*return*/, createWaiter(__assign(__assign({}, serviceDefaults), params), input, checkState)];
    });
  });
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAutoScalingGroupsCommand for polling.
 */
export var waitUntilGroupInService = function (params, input) {
  return __awaiter(void 0, void 0, void 0, function () {
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
  });
};
//# sourceMappingURL=waitForGroupInService.js.map
