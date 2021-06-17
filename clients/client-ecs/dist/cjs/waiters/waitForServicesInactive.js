"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilServicesInactive = exports.waitForServicesInactive = void 0;
const DescribeServicesCommand_1 = require("../commands/DescribeServicesCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeServicesCommand_1.DescribeServicesCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.failures);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.reason;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "MISSING") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.services);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "INACTIVE") {
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
 *  @deprecated Use waitUntilServicesInactive instead. waitForServicesInactive does not throw error in non-success cases.
 */
const waitForServicesInactive = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForServicesInactive = waitForServicesInactive;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeServicesCommand for polling.
 */
const waitUntilServicesInactive = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilServicesInactive = waitUntilServicesInactive;
//# sourceMappingURL=waitForServicesInactive.js.map