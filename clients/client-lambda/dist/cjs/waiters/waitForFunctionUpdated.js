"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFunctionUpdated = exports.waitForFunctionUpdated = void 0;
const GetFunctionConfigurationCommand_1 = require("../commands/GetFunctionConfigurationCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionConfigurationCommand_1.GetFunctionConfigurationCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.LastUpdateStatus;
            };
            if (returnComparator() === "Successful") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.LastUpdateStatus;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.LastUpdateStatus;
            };
            if (returnComparator() === "InProgress") {
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
 * Waits for the function's LastUpdateStatus to be Successful.
 *  @deprecated Use waitUntilFunctionUpdated instead. waitForFunctionUpdated does not throw error in non-success cases.
 */
const waitForFunctionUpdated = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFunctionUpdated = waitForFunctionUpdated;
/**
 * Waits for the function's LastUpdateStatus to be Successful.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionConfigurationCommand for polling.
 */
const waitUntilFunctionUpdated = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilFunctionUpdated = waitUntilFunctionUpdated;
//# sourceMappingURL=waitForFunctionUpdated.js.map