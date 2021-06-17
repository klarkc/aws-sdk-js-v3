"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAssetNotExists = exports.waitForAssetNotExists = void 0;
const DescribeAssetCommand_1 = require("../commands/DescribeAssetCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAssetCommand_1.DescribeAssetCommand(input));
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
 *  @deprecated Use waitUntilAssetNotExists instead. waitForAssetNotExists does not throw error in non-success cases.
 */
const waitForAssetNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAssetNotExists = waitForAssetNotExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetCommand for polling.
 */
const waitUntilAssetNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAssetNotExists = waitUntilAssetNotExists;
//# sourceMappingURL=waitForAssetNotExists.js.map