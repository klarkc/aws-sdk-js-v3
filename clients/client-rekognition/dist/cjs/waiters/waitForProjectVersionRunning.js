"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilProjectVersionRunning = exports.waitForProjectVersionRunning = void 0;
const DescribeProjectVersionsCommand_1 = require("../commands/DescribeProjectVersionsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeProjectVersionsCommand_1.DescribeProjectVersionsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ProjectVersionDescriptions);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "RUNNING";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ProjectVersionDescriptions);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "FAILED") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
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
 * Wait until the ProjectVersion is running.
 *  @deprecated Use waitUntilProjectVersionRunning instead. waitForProjectVersionRunning does not throw error in non-success cases.
 */
const waitForProjectVersionRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForProjectVersionRunning = waitForProjectVersionRunning;
/**
 * Wait until the ProjectVersion is running.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeProjectVersionsCommand for polling.
 */
const waitUntilProjectVersionRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilProjectVersionRunning = waitUntilProjectVersionRunning;
//# sourceMappingURL=waitForProjectVersionRunning.js.map