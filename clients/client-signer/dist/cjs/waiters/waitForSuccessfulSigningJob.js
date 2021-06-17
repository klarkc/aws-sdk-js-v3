"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilSuccessfulSigningJob = exports.waitForSuccessfulSigningJob = void 0;
const DescribeSigningJobCommand_1 = require("../commands/DescribeSigningJobCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeSigningJobCommand_1.DescribeSigningJobCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.status;
            };
            if (returnComparator() === "Succeeded") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.status;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.FAILURE, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSuccessfulSigningJob instead. waitForSuccessfulSigningJob does not throw error in non-success cases.
 */
const waitForSuccessfulSigningJob = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForSuccessfulSigningJob = waitForSuccessfulSigningJob;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSigningJobCommand for polling.
 */
const waitUntilSuccessfulSigningJob = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilSuccessfulSigningJob = waitUntilSuccessfulSigningJob;
//# sourceMappingURL=waitForSuccessfulSigningJob.js.map