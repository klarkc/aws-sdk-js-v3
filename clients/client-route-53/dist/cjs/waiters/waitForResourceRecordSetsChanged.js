"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilResourceRecordSetsChanged = exports.waitForResourceRecordSetsChanged = void 0;
const GetChangeCommand_1 = require("../commands/GetChangeCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetChangeCommand_1.GetChangeCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.ChangeInfo.Status;
            };
            if (returnComparator() === "INSYNC") {
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
 *  @deprecated Use waitUntilResourceRecordSetsChanged instead. waitForResourceRecordSetsChanged does not throw error in non-success cases.
 */
const waitForResourceRecordSetsChanged = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForResourceRecordSetsChanged = waitForResourceRecordSetsChanged;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetChangeCommand for polling.
 */
const waitUntilResourceRecordSetsChanged = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilResourceRecordSetsChanged = waitUntilResourceRecordSetsChanged;
//# sourceMappingURL=waitForResourceRecordSetsChanged.js.map