"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCertificateAuthorityCSRCreated = exports.waitForCertificateAuthorityCSRCreated = void 0;
const GetCertificateAuthorityCsrCommand_1 = require("../commands/GetCertificateAuthorityCsrCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new GetCertificateAuthorityCsrCommand_1.GetCertificateAuthorityCsrCommand(input));
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
 * Wait until a Certificate Authority CSR is created
 *  @deprecated Use waitUntilCertificateAuthorityCSRCreated instead. waitForCertificateAuthorityCSRCreated does not throw error in non-success cases.
 */
const waitForCertificateAuthorityCSRCreated = async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCertificateAuthorityCSRCreated = waitForCertificateAuthorityCSRCreated;
/**
 * Wait until a Certificate Authority CSR is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateAuthorityCsrCommand for polling.
 */
const waitUntilCertificateAuthorityCSRCreated = async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilCertificateAuthorityCSRCreated = waitUntilCertificateAuthorityCSRCreated;
//# sourceMappingURL=waitForCertificateAuthorityCSRCreated.js.map
