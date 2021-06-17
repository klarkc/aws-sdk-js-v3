"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilJobComplete = exports.waitForJobComplete = void 0;
const ReadJobCommand_1 = require("../commands/ReadJobCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new ReadJobCommand_1.ReadJobCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Job.Status;
            };
            if (returnComparator() === "Complete") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Job.Status;
            };
            if (returnComparator() === "Canceled") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Job.Status;
            };
            if (returnComparator() === "Error") {
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
 *  @deprecated Use waitUntilJobComplete instead. waitForJobComplete does not throw error in non-success cases.
 */
const waitForJobComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForJobComplete = waitForJobComplete;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to ReadJobCommand for polling.
 */
const waitUntilJobComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilJobComplete = waitUntilJobComplete;
//# sourceMappingURL=waitForJobComplete.js.map