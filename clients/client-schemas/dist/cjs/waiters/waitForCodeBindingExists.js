"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCodeBindingExists = exports.waitForCodeBindingExists = void 0;
const DescribeCodeBindingCommand_1 = require("../commands/DescribeCodeBindingCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeCodeBindingCommand_1.DescribeCodeBindingCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "CREATE_COMPLETE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "CREATE_IN_PROGRESS") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "CREATE_FAILED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NotFoundException") {
            return { state: util_waiter_1.WaiterState.FAILURE, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until code binding is generated
 *  @deprecated Use waitUntilCodeBindingExists instead. waitForCodeBindingExists does not throw error in non-success cases.
 */
const waitForCodeBindingExists = async (params, input) => {
    const serviceDefaults = { minDelay: 2, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCodeBindingExists = waitForCodeBindingExists;
/**
 * Wait until code binding is generated
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCodeBindingCommand for polling.
 */
const waitUntilCodeBindingExists = async (params, input) => {
    const serviceDefaults = { minDelay: 2, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilCodeBindingExists = waitUntilCodeBindingExists;
//# sourceMappingURL=waitForCodeBindingExists.js.map