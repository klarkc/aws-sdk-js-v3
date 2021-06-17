"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilInputDeleted = exports.waitForInputDeleted = void 0;
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
            if (returnComparator() === "DELETED") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "DELETING") {
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
 * Wait until an input has been deleted
 *  @deprecated Use waitUntilInputDeleted instead. waitForInputDeleted does not throw error in non-success cases.
 */
const waitForInputDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForInputDeleted = waitForInputDeleted;
/**
 * Wait until an input has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInputCommand for polling.
 */
const waitUntilInputDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilInputDeleted = waitUntilInputDeleted;
//# sourceMappingURL=waitForInputDeleted.js.map