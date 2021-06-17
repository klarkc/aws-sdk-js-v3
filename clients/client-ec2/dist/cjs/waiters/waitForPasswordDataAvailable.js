"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilPasswordDataAvailable = exports.waitForPasswordDataAvailable = void 0;
const GetPasswordDataCommand_1 = require("../commands/GetPasswordDataCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetPasswordDataCommand_1.GetPasswordDataCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.PasswordData.length > 0.0;
            };
            if (returnComparator() == true) {
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
 *  @deprecated Use waitUntilPasswordDataAvailable instead. waitForPasswordDataAvailable does not throw error in non-success cases.
 */
const waitForPasswordDataAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForPasswordDataAvailable = waitForPasswordDataAvailable;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPasswordDataCommand for polling.
 */
const waitUntilPasswordDataAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilPasswordDataAvailable = waitUntilPasswordDataAvailable;
//# sourceMappingURL=waitForPasswordDataAvailable.js.map