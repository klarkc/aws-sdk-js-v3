"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilSystemStatusOk = exports.waitForSystemStatusOk = void 0;
const DescribeInstanceStatusCommand_1 = require("../commands/DescribeInstanceStatusCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeInstanceStatusCommand_1.DescribeInstanceStatusCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.InstanceStatuses);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.SystemStatus.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "ok";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
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
 *  @deprecated Use waitUntilSystemStatusOk instead. waitForSystemStatusOk does not throw error in non-success cases.
 */
const waitForSystemStatusOk = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForSystemStatusOk = waitForSystemStatusOk;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceStatusCommand for polling.
 */
const waitUntilSystemStatusOk = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilSystemStatusOk = waitUntilSystemStatusOk;
//# sourceMappingURL=waitForSystemStatusOk.js.map