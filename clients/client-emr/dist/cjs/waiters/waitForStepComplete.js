"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilStepComplete = exports.waitForStepComplete = void 0;
const DescribeStepCommand_1 = require("../commands/DescribeStepCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeStepCommand_1.DescribeStepCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Step.Status.State;
            };
            if (returnComparator() === "COMPLETED") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Step.Status.State;
            };
            if (returnComparator() === "FAILED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Step.Status.State;
            };
            if (returnComparator() === "CANCELLED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
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
 *  @deprecated Use waitUntilStepComplete instead. waitForStepComplete does not throw error in non-success cases.
 */
const waitForStepComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStepComplete = waitForStepComplete;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStepCommand for polling.
 */
const waitUntilStepComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilStepComplete = waitUntilStepComplete;
//# sourceMappingURL=waitForStepComplete.js.map