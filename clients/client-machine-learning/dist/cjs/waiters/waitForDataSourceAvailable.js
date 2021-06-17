"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilDataSourceAvailable = exports.waitForDataSourceAvailable = void 0;
const DescribeDataSourcesCommand_1 = require("../commands/DescribeDataSourcesCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeDataSourcesCommand_1.DescribeDataSourcesCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Results);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "COMPLETED";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Results);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "FAILED") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilDataSourceAvailable instead. waitForDataSourceAvailable does not throw error in non-success cases.
 */
const waitForDataSourceAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForDataSourceAvailable = waitForDataSourceAvailable;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDataSourcesCommand for polling.
 */
const waitUntilDataSourceAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilDataSourceAvailable = waitUntilDataSourceAvailable;
//# sourceMappingURL=waitForDataSourceAvailable.js.map