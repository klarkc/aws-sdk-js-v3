"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilEndpointDeleted = exports.waitForEndpointDeleted = void 0;
const DescribeEndpointsCommand_1 = require("../commands/DescribeEndpointsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeEndpointsCommand_1.DescribeEndpointsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Endpoints);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "active") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Endpoints);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "creating") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundFault") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until testing endpoint is deleted.
 *  @deprecated Use waitUntilEndpointDeleted instead. waitForEndpointDeleted does not throw error in non-success cases.
 */
const waitForEndpointDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForEndpointDeleted = waitForEndpointDeleted;
/**
 * Wait until testing endpoint is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEndpointsCommand for polling.
 */
const waitUntilEndpointDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilEndpointDeleted = waitUntilEndpointDeleted;
//# sourceMappingURL=waitForEndpointDeleted.js.map