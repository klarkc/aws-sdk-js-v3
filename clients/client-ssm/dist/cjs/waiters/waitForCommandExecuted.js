"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCommandExecuted = exports.waitForCommandExecuted = void 0;
const GetCommandInvocationCommand_1 = require("../commands/GetCommandInvocationCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetCommandInvocationCommand_1.GetCommandInvocationCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Pending") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "InProgress") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Delayed") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Success") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Cancelled") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "TimedOut") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Cancelling") {
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
 *  @deprecated Use waitUntilCommandExecuted instead. waitForCommandExecuted does not throw error in non-success cases.
 */
const waitForCommandExecuted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCommandExecuted = waitForCommandExecuted;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCommandInvocationCommand for polling.
 */
const waitUntilCommandExecuted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilCommandExecuted = waitUntilCommandExecuted;
//# sourceMappingURL=waitForCommandExecuted.js.map