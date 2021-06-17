"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilNodeAssociated = exports.waitForNodeAssociated = void 0;
const DescribeNodeAssociationStatusCommand_1 = require("../commands/DescribeNodeAssociationStatusCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeNodeAssociationStatusCommand_1.DescribeNodeAssociationStatusCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.NodeAssociationStatus;
            };
            if (returnComparator() === "SUCCESS") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.NodeAssociationStatus;
            };
            if (returnComparator() === "FAILED") {
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
 * Wait until node is associated or disassociated.
 *  @deprecated Use waitUntilNodeAssociated instead. waitForNodeAssociated does not throw error in non-success cases.
 */
const waitForNodeAssociated = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForNodeAssociated = waitForNodeAssociated;
/**
 * Wait until node is associated or disassociated.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodeAssociationStatusCommand for polling.
 */
const waitUntilNodeAssociated = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilNodeAssociated = waitUntilNodeAssociated;
//# sourceMappingURL=waitForNodeAssociated.js.map