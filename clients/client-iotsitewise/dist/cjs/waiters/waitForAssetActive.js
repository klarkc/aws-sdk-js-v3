"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAssetActive = exports.waitForAssetActive = void 0;
const DescribeAssetCommand_1 = require("../commands/DescribeAssetCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAssetCommand_1.DescribeAssetCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.assetStatus.state;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.assetStatus.state;
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
 *  @deprecated Use waitUntilAssetActive instead. waitForAssetActive does not throw error in non-success cases.
 */
const waitForAssetActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAssetActive = waitForAssetActive;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAssetCommand for polling.
 */
const waitUntilAssetActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAssetActive = waitUntilAssetActive;
//# sourceMappingURL=waitForAssetActive.js.map