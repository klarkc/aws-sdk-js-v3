"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilNotebookInstanceInService = exports.waitForNotebookInstanceInService = void 0;
const DescribeNotebookInstanceCommand_1 = require("../commands/DescribeNotebookInstanceCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeNotebookInstanceCommand_1.DescribeNotebookInstanceCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.NotebookInstanceStatus;
            };
            if (returnComparator() === "InService") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.NotebookInstanceStatus;
            };
            if (returnComparator() === "Failed") {
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
 *  @deprecated Use waitUntilNotebookInstanceInService instead. waitForNotebookInstanceInService does not throw error in non-success cases.
 */
const waitForNotebookInstanceInService = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForNotebookInstanceInService = waitForNotebookInstanceInService;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNotebookInstanceCommand for polling.
 */
const waitUntilNotebookInstanceInService = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilNotebookInstanceInService = waitUntilNotebookInstanceInService;
//# sourceMappingURL=waitForNotebookInstanceInService.js.map