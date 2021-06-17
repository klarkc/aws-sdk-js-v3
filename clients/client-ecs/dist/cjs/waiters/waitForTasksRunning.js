"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilTasksRunning = exports.waitForTasksRunning = void 0;
const DescribeTasksCommand_1 = require("../commands/DescribeTasksCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeTasksCommand_1.DescribeTasksCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.tasks);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.lastStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "STOPPED") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.failures);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.reason;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "MISSING") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.tasks);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.lastStatus;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "RUNNING";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
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
 *  @deprecated Use waitUntilTasksRunning instead. waitForTasksRunning does not throw error in non-success cases.
 */
const waitForTasksRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 6, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForTasksRunning = waitForTasksRunning;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTasksCommand for polling.
 */
const waitUntilTasksRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 6, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilTasksRunning = waitUntilTasksRunning;
//# sourceMappingURL=waitForTasksRunning.js.map