"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilStreamNotExists = exports.waitForStreamNotExists = void 0;
const DescribeStreamCommand_1 = require("../commands/DescribeStreamCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeStreamCommand_1.DescribeStreamCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilStreamNotExists instead. waitForStreamNotExists does not throw error in non-success cases.
 */
const waitForStreamNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamNotExists = waitForStreamNotExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStreamCommand for polling.
 */
const waitUntilStreamNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilStreamNotExists = waitUntilStreamNotExists;
//# sourceMappingURL=waitForStreamNotExists.js.map