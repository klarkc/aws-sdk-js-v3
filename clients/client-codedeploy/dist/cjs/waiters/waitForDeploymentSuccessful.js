"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilDeploymentSuccessful = exports.waitForDeploymentSuccessful = void 0;
const GetDeploymentCommand_1 = require("../commands/GetDeploymentCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetDeploymentCommand_1.GetDeploymentCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.deploymentInfo.status;
            };
            if (returnComparator() === "Succeeded") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.deploymentInfo.status;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.deploymentInfo.status;
            };
            if (returnComparator() === "Stopped") {
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
 *  @deprecated Use waitUntilDeploymentSuccessful instead. waitForDeploymentSuccessful does not throw error in non-success cases.
 */
const waitForDeploymentSuccessful = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForDeploymentSuccessful = waitForDeploymentSuccessful;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDeploymentCommand for polling.
 */
const waitUntilDeploymentSuccessful = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilDeploymentSuccessful = waitUntilDeploymentSuccessful;
//# sourceMappingURL=waitForDeploymentSuccessful.js.map