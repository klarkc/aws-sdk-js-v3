"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAppExists = exports.waitForAppExists = void 0;
const DescribeAppsCommand_1 = require("../commands/DescribeAppsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAppsCommand_1.DescribeAppsCommand(input));
        reason = result;
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        return { state: util_waiter_1.WaiterState.FAILURE, reason };
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAppExists instead. waitForAppExists does not throw error in non-success cases.
 */
const waitForAppExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAppExists = waitForAppExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAppsCommand for polling.
 */
const waitUntilAppExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAppExists = waitUntilAppExists;
//# sourceMappingURL=waitForAppExists.js.map