"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilVaultExists = exports.waitForVaultExists = void 0;
const DescribeVaultCommand_1 = require("../commands/DescribeVaultCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeVaultCommand_1.DescribeVaultCommand(input));
        reason = result;
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilVaultExists instead. waitForVaultExists does not throw error in non-success cases.
 */
const waitForVaultExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForVaultExists = waitForVaultExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVaultCommand for polling.
 */
const waitUntilVaultExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilVaultExists = waitUntilVaultExists;
//# sourceMappingURL=waitForVaultExists.js.map