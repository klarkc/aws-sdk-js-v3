"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilPortalActive = exports.waitForPortalActive = void 0;
const DescribePortalCommand_1 = require("../commands/DescribePortalCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribePortalCommand_1.DescribePortalCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.portalStatus.state;
            };
            if (returnComparator() === "ACTIVE") {
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
 *  @deprecated Use waitUntilPortalActive instead. waitForPortalActive does not throw error in non-success cases.
 */
const waitForPortalActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForPortalActive = waitForPortalActive;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribePortalCommand for polling.
 */
const waitUntilPortalActive = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilPortalActive = waitUntilPortalActive;
//# sourceMappingURL=waitForPortalActive.js.map