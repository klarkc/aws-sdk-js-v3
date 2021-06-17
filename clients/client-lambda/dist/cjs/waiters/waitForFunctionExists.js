"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFunctionExists = exports.waitForFunctionExists = void 0;
const GetFunctionCommand_1 = require("../commands/GetFunctionCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetFunctionCommand_1.GetFunctionCommand(input));
        reason = result;
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilFunctionExists instead. waitForFunctionExists does not throw error in non-success cases.
 */
const waitForFunctionExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFunctionExists = waitForFunctionExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionCommand for polling.
 */
const waitUntilFunctionExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilFunctionExists = waitUntilFunctionExists;
//# sourceMappingURL=waitForFunctionExists.js.map