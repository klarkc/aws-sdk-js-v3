"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAlarmExists = exports.waitForAlarmExists = void 0;
const DescribeAlarmsCommand_1 = require("../commands/DescribeAlarmsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAlarmsCommand_1.DescribeAlarmsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.MetricAlarms);
                return flat_1.length > 0.0;
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
 *  @deprecated Use waitUntilAlarmExists instead. waitForAlarmExists does not throw error in non-success cases.
 */
const waitForAlarmExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAlarmExists = waitForAlarmExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
const waitUntilAlarmExists = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAlarmExists = waitUntilAlarmExists;
//# sourceMappingURL=waitForAlarmExists.js.map