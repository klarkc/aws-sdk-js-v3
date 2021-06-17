"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilTasksStopped = exports.waitForTasksStopped = void 0;
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
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "STOPPED";
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
 *  @deprecated Use waitUntilTasksStopped instead. waitForTasksStopped does not throw error in non-success cases.
 */
const waitForTasksStopped = async (params, input) => {
    const serviceDefaults = { minDelay: 6, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForTasksStopped = waitForTasksStopped;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTasksCommand for polling.
 */
const waitUntilTasksStopped = async (params, input) => {
    const serviceDefaults = { minDelay: 6, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilTasksStopped = waitUntilTasksStopped;
//# sourceMappingURL=waitForTasksStopped.js.map