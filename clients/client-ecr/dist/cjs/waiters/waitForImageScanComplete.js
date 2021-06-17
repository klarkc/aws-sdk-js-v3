"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilImageScanComplete = exports.waitForImageScanComplete = void 0;
const DescribeImageScanFindingsCommand_1 = require("../commands/DescribeImageScanFindingsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeImageScanFindingsCommand_1.DescribeImageScanFindingsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.imageScanStatus.status;
            };
            if (returnComparator() === "COMPLETE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.imageScanStatus.status;
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
 * Wait until an image scan is complete and findings can be accessed
 *  @deprecated Use waitUntilImageScanComplete instead. waitForImageScanComplete does not throw error in non-success cases.
 */
const waitForImageScanComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForImageScanComplete = waitForImageScanComplete;
/**
 * Wait until an image scan is complete and findings can be accessed
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageScanFindingsCommand for polling.
 */
const waitUntilImageScanComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilImageScanComplete = waitUntilImageScanComplete;
//# sourceMappingURL=waitForImageScanComplete.js.map