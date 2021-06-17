"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilInputDetached = exports.waitForInputDetached = void 0;
const DescribeInputCommand_1 = require("../commands/DescribeInputCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeInputCommand_1.DescribeInputCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "DETACHED") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "CREATING") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "ATTACHED") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "InternalServerErrorException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until an input has been detached
 *  @deprecated Use waitUntilInputDetached instead. waitForInputDetached does not throw error in non-success cases.
 */
const waitForInputDetached = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForInputDetached = waitForInputDetached;
/**
 * Wait until an input has been detached
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
const waitUntilInputDetached = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilInputDetached = waitUntilInputDetached;
//# sourceMappingURL=waitForInputDetached.js.map