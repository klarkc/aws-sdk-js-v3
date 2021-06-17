"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilVolumeInUse = exports.waitForVolumeInUse = void 0;
const DescribeVolumesCommand_1 = require("../commands/DescribeVolumesCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeVolumesCommand_1.DescribeVolumesCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Volumes);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "in-use";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Volumes);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.State;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "deleted") {
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
 *
 *  @deprecated Use waitUntilVolumeInUse instead. waitForVolumeInUse does not throw error in non-success cases.
 */
const waitForVolumeInUse = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForVolumeInUse = waitForVolumeInUse;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVolumesCommand for polling.
 */
const waitUntilVolumeInUse = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilVolumeInUse = waitUntilVolumeInUse;
//# sourceMappingURL=waitForVolumeInUse.js.map