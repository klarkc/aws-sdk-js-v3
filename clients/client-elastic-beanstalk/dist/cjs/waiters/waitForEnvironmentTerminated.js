"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilEnvironmentTerminated = exports.waitForEnvironmentTerminated = void 0;
const DescribeEnvironmentsCommand_1 = require("../commands/DescribeEnvironmentsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeEnvironmentsCommand_1.DescribeEnvironmentsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Environments);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "Terminated";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Environments);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "Terminating";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
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
 *  @deprecated Use waitUntilEnvironmentTerminated instead. waitForEnvironmentTerminated does not throw error in non-success cases.
 */
const waitForEnvironmentTerminated = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForEnvironmentTerminated = waitForEnvironmentTerminated;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEnvironmentsCommand for polling.
 */
const waitUntilEnvironmentTerminated = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilEnvironmentTerminated = waitUntilEnvironmentTerminated;
//# sourceMappingURL=waitForEnvironmentTerminated.js.map