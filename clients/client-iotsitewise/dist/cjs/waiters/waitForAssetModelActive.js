"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAssetModelActive = exports.waitForAssetModelActive = void 0;
const DescribeAssetModelCommand_1 = require("../commands/DescribeAssetModelCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAssetModelCommand_1.DescribeAssetModelCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.assetModelStatus.state;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.assetModelStatus.state;
            };
            if (returnComparator() === "FAILED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
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
 *  @deprecated Use waitUntilAssetModelActive instead. waitForAssetModelActive does not throw error in non-success cases.
 */
const waitForAssetModelActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAssetModelActive = waitForAssetModelActive;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetModelCommand for polling.
 */
const waitUntilAssetModelActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAssetModelActive = waitUntilAssetModelActive;
//# sourceMappingURL=waitForAssetModelActive.js.map