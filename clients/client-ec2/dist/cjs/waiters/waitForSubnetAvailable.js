"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilSubnetAvailable = exports.waitForSubnetAvailable = void 0;
const DescribeSubnetsCommand_1 = require("../commands/DescribeSubnetsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeSubnetsCommand_1.DescribeSubnetsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Subnets);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "available";
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
 *  @deprecated Use waitUntilSubnetAvailable instead. waitForSubnetAvailable does not throw error in non-success cases.
 */
const waitForSubnetAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForSubnetAvailable = waitForSubnetAvailable;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSubnetsCommand for polling.
 */
const waitUntilSubnetAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilSubnetAvailable = waitUntilSubnetAvailable;
//# sourceMappingURL=waitForSubnetAvailable.js.map