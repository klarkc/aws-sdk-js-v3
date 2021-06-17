"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilStreamExists = exports.waitForStreamExists = void 0;
const DescribeStreamCommand_1 = require("../commands/DescribeStreamCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeStreamCommand_1.DescribeStreamCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.StreamDescription.StreamStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
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
 *  @deprecated Use waitUntilStreamExists instead. waitForStreamExists does not throw error in non-success cases.
 */
const waitForStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamExists = waitForStreamExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStreamCommand for polling.
 */
const waitUntilStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilStreamExists = waitUntilStreamExists;
//# sourceMappingURL=waitForStreamExists.js.map