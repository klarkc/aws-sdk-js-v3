"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilInputAttached = exports.waitForInputAttached = void 0;
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
            if (returnComparator() === "ATTACHED") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "DETACHED") {
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
 * Wait until an input has been attached
 *  @deprecated Use waitUntilInputAttached instead. waitForInputAttached does not throw error in non-success cases.
 */
const waitForInputAttached = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForInputAttached = waitForInputAttached;
/**
 * Wait until an input has been attached
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
const waitUntilInputAttached = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilInputAttached = waitUntilInputAttached;
//# sourceMappingURL=waitForInputAttached.js.map