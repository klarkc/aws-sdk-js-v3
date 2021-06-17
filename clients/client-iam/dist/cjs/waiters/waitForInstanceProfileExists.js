"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilInstanceProfileExists = exports.waitForInstanceProfileExists = void 0;
const GetInstanceProfileCommand_1 = require("../commands/GetInstanceProfileCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetInstanceProfileCommand_1.GetInstanceProfileCommand(input));
        reason = result;
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NoSuchEntityException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceProfileExists instead. waitForInstanceProfileExists does not throw error in non-success cases.
 */
const waitForInstanceProfileExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForInstanceProfileExists = waitForInstanceProfileExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInstanceProfileCommand for polling.
 */
const waitUntilInstanceProfileExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilInstanceProfileExists = waitUntilInstanceProfileExists;
//# sourceMappingURL=waitForInstanceProfileExists.js.map