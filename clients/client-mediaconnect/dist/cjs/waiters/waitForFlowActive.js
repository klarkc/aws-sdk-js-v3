"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFlowActive = exports.waitForFlowActive = void 0;
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
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Flow.Status;
            };
            if (returnComparator() === "STARTING") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Flow.Status;
            };
            if (returnComparator() === "UPDATING") {
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
 * Wait until a flow is active
 *  @deprecated Use waitUntilFlowActive instead. waitForFlowActive does not throw error in non-success cases.
 */
const waitForFlowActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFlowActive = waitForFlowActive;
/**
 * Wait until a flow is active
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFlowCommand for polling.
 */
const waitUntilFlowActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilFlowActive = waitUntilFlowActive;
//# sourceMappingURL=waitForFlowActive.js.map