"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilInstanceStopped = exports.waitForInstanceStopped = void 0;
const DescribeInstancesCommand_1 = require("../commands/DescribeInstancesCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeInstancesCommand_1.DescribeInstancesCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Reservations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Instances;
                });
                let flat_4 = [].concat(...projection_3);
                let projection_6 = flat_4.map((element_5) => {
                    return element_5.State.Name;
                });
                return projection_6;
            };
            let allStringEq_8 = returnComparator().length > 0;
            for (let element_7 of returnComparator()) {
                allStringEq_8 = allStringEq_8 && element_7 == "stopped";
            }
            if (allStringEq_8) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Reservations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Instances;
                });
                let flat_4 = [].concat(...projection_3);
                let projection_6 = flat_4.map((element_5) => {
                    return element_5.State.Name;
                });
                return projection_6;
            };
            for (let anyStringEq_7 of returnComparator()) {
                if (anyStringEq_7 == "pending") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Reservations);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Instances;
                });
                let flat_4 = [].concat(...projection_3);
                let projection_6 = flat_4.map((element_5) => {
                    return element_5.State.Name;
                });
                return projection_6;
            };
            for (let anyStringEq_7 of returnComparator()) {
                if (anyStringEq_7 == "terminated") {
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
 *
 *  @deprecated Use waitUntilInstanceStopped instead. waitForInstanceStopped does not throw error in non-success cases.
 */
const waitForInstanceStopped = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForInstanceStopped = waitForInstanceStopped;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
const waitUntilInstanceStopped = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilInstanceStopped = waitUntilInstanceStopped;
//# sourceMappingURL=waitForInstanceStopped.js.map