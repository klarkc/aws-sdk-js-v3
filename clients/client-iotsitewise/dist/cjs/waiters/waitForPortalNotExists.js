"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilPortalNotExists = exports.waitForPortalNotExists = void 0;
const DescribePortalCommand_1 = require("../commands/DescribePortalCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribePortalCommand_1.DescribePortalCommand(input));
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
 *  @deprecated Use waitUntilPortalNotExists instead. waitForPortalNotExists does not throw error in non-success cases.
 */
const waitForPortalNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForPortalNotExists = waitForPortalNotExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribePortalCommand for polling.
 */
const waitUntilPortalNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilPortalNotExists = waitUntilPortalNotExists;
//# sourceMappingURL=waitForPortalNotExists.js.map