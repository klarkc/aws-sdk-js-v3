"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCertificateIssued = exports.waitForCertificateIssued = void 0;
const GetCertificateCommand_1 = require("../commands/GetCertificateCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new GetCertificateCommand_1.GetCertificateCommand(input));
    reason = result;
    return { state: util_waiter_1.WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "RequestInProgressException") {
      return { state: util_waiter_1.WaiterState.RETRY, reason };
    }
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until a certificate is issued
 *  @deprecated Use waitUntilCertificateIssued instead. waitForCertificateIssued does not throw error in non-success cases.
 */
const waitForCertificateIssued = async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCertificateIssued = waitForCertificateIssued;
/**
 * Wait until a certificate is issued
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateCommand for polling.
 */
const waitUntilCertificateIssued = async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilCertificateIssued = waitUntilCertificateIssued;
//# sourceMappingURL=waitForCertificateIssued.js.map
