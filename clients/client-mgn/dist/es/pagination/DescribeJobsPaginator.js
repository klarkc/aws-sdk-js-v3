import { __asyncGenerator, __await, __awaiter, __generator, __read, __spreadArray } from "tslib";
import { Mgn } from "../Mgn";
import { MgnClient } from "../MgnClient";
import { DescribeJobsCommand, } from "../commands/DescribeJobsCommand";
/**
 * @private
 */
var makePagedClientRequest = function (client, input) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.send.apply(client, __spreadArray([new DescribeJobsCommand(input)], __read(args)))];
                case 1: 
                // @ts-ignore
                return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * @private
 */
var makePagedRequest = function (client, input) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.describeJobs.apply(client, __spreadArray([input], __read(args)))];
                case 1: 
                // @ts-ignore
                return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export function paginateDescribeJobs(config, input) {
    var additionalArguments = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalArguments[_i - 2] = arguments[_i];
    }
    return __asyncGenerator(this, arguments, function paginateDescribeJobs_1() {
        var token, hasNext, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = config.startingToken || undefined;
                    hasNext = true;
                    _a.label = 1;
                case 1:
                    if (!hasNext) return [3 /*break*/, 9];
                    input.nextToken = token;
                    input["maxResults"] = config.pageSize;
                    if (!(config.client instanceof Mgn)) return [3 /*break*/, 3];
                    return [4 /*yield*/, __await(makePagedRequest.apply(void 0, __spreadArray([config.client, input], __read(additionalArguments))))];
                case 2:
                    page = _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    if (!(config.client instanceof MgnClient)) return [3 /*break*/, 5];
                    return [4 /*yield*/, __await(makePagedClientRequest.apply(void 0, __spreadArray([config.client, input], __read(additionalArguments))))];
                case 4:
                    page = _a.sent();
                    return [3 /*break*/, 6];
                case 5: throw new Error("Invalid client, expected Mgn | MgnClient");
                case 6: return [4 /*yield*/, __await(page)];
                case 7: return [4 /*yield*/, _a.sent()];
                case 8:
                    _a.sent();
                    token = page.nextToken;
                    hasNext = !!token;
                    return [3 /*break*/, 1];
                case 9: return [4 /*yield*/, __await(undefined)];
                case 10: 
                // @ts-ignore
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=DescribeJobsPaginator.js.map