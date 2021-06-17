"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilLifecyclePolicyPreviewComplete = exports.waitForLifecyclePolicyPreviewComplete = void 0;
const GetLifecyclePolicyPreviewCommand_1 = require("../commands/GetLifecyclePolicyPreviewCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetLifecyclePolicyPreviewCommand_1.GetLifecyclePolicyPreviewCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.status;
            };
            if (returnComparator() === "COMPLETE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.status;
            };
            if (returnComparator() === "FAILED") {
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
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @deprecated Use waitUntilLifecyclePolicyPreviewComplete instead. waitForLifecyclePolicyPreviewComplete does not throw error in non-success cases.
 */
const waitForLifecyclePolicyPreviewComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForLifecyclePolicyPreviewComplete = waitForLifecyclePolicyPreviewComplete;
/**
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLifecyclePolicyPreviewCommand for polling.
 */
const waitUntilLifecyclePolicyPreviewComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilLifecyclePolicyPreviewComplete = waitUntilLifecyclePolicyPreviewComplete;
//# sourceMappingURL=waitForLifecyclePolicyPreviewComplete.js.map