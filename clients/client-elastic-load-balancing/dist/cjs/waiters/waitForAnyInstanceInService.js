"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAnyInstanceInService = exports.waitForAnyInstanceInService = void 0;
const DescribeInstanceHealthCommand_1 = require("../commands/DescribeInstanceHealthCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeInstanceHealthCommand_1.DescribeInstanceHealthCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.InstanceStates);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "InService") {
                    return { state: util_waiter_1.WaiterState.SUCCESS, reason };
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
 *
 *  @deprecated Use waitUntilAnyInstanceInService instead. waitForAnyInstanceInService does not throw error in non-success cases.
 */
const waitForAnyInstanceInService = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAnyInstanceInService = waitForAnyInstanceInService;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceHealthCommand for polling.
 */
const waitUntilAnyInstanceInService = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAnyInstanceInService = waitUntilAnyInstanceInService;
//# sourceMappingURL=waitForAnyInstanceInService.js.map