"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFlowStandby = exports.waitForFlowStandby = void 0;
const DescribeFlowCommand_1 = require("../commands/DescribeFlowCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeFlowCommand_1.DescribeFlowCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Flow.Status;
            };
            if (returnComparator() === "STANDBY") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Flow.Status;
            };
            if (returnComparator() === "STOPPING") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Flow.Status;
            };
            if (returnComparator() === "ERROR") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "InternalServerErrorException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
        if (exception.name && exception.name == "ServiceUnavailableException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until a flow is in standby mode
 *  @deprecated Use waitUntilFlowStandby instead. waitForFlowStandby does not throw error in non-success cases.
 */
const waitForFlowStandby = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFlowStandby = waitForFlowStandby;
/**
 * Wait until a flow is in standby mode
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
const waitUntilFlowStandby = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilFlowStandby = waitUntilFlowStandby;
//# sourceMappingURL=waitForFlowStandby.js.map