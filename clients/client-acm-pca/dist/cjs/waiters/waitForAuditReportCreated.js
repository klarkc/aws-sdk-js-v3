"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAuditReportCreated = exports.waitForAuditReportCreated = void 0;
const DescribeCertificateAuthorityAuditReportCommand_1 = require("../commands/DescribeCertificateAuthorityAuditReportCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(
      new DescribeCertificateAuthorityAuditReportCommand_1.DescribeCertificateAuthorityAuditReportCommand(input)
    );
    reason = result;
    try {
      let returnComparator = () => {
        return result.AuditReportStatus;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.AuditReportStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: util_waiter_1.WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until a Audit Report is created
 *  @deprecated Use waitUntilAuditReportCreated instead. waitForAuditReportCreated does not throw error in non-success cases.
 */
const waitForAuditReportCreated = async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAuditReportCreated = waitForAuditReportCreated;
/**
 * Wait until a Audit Report is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCertificateAuthorityAuditReportCommand for polling.
 */
const waitUntilAuditReportCreated = async (params, input) => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAuditReportCreated = waitUntilAuditReportCreated;
//# sourceMappingURL=waitForAuditReportCreated.js.map
