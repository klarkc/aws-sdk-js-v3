"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilTestConnectionSucceeds = exports.waitForTestConnectionSucceeds = void 0;
const DescribeConnectionsCommand_1 = require("../commands/DescribeConnectionsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeConnectionsCommand_1.DescribeConnectionsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Connections);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "successful";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Connections);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "failed") {
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
 * Wait until testing connection succeeds.
 *  @deprecated Use waitUntilTestConnectionSucceeds instead. waitForTestConnectionSucceeds does not throw error in non-success cases.
 */
const waitForTestConnectionSucceeds = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForTestConnectionSucceeds = waitForTestConnectionSucceeds;
/**
 * Wait until testing connection succeeds.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeConnectionsCommand for polling.
 */
const waitUntilTestConnectionSucceeds = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilTestConnectionSucceeds = waitUntilTestConnectionSucceeds;
//# sourceMappingURL=waitForTestConnectionSucceeds.js.map