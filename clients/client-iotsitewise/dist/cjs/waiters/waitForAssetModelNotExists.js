"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAssetModelNotExists = exports.waitForAssetModelNotExists = void 0;
const DescribeAssetModelCommand_1 = require("../commands/DescribeAssetModelCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAssetModelCommand_1.DescribeAssetModelCommand(input));
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
 *  @deprecated Use waitUntilAssetModelNotExists instead. waitForAssetModelNotExists does not throw error in non-success cases.
 */
const waitForAssetModelNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAssetModelNotExists = waitForAssetModelNotExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetModelCommand for polling.
 */
const waitUntilAssetModelNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAssetModelNotExists = waitUntilAssetModelNotExists;
//# sourceMappingURL=waitForAssetModelNotExists.js.map