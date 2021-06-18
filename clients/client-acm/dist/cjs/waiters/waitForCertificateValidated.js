"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCertificateValidated = exports.waitForCertificateValidated = void 0;
const DescribeCertificateCommand_1 = require("../commands/DescribeCertificateCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
  let reason;
  try {
    let result = await client.send(new DescribeCertificateCommand_1.DescribeCertificateCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.Certificate.DomainValidationOptions);
        let projection_3 = flat_1.map((element_2) => {
          return element_2.ValidationStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "SUCCESS";
      }
      if (allStringEq_5) {
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1 = [].concat(...result.Certificate.DomainValidationOptions);
        let projection_3 = flat_1.map((element_2) => {
          return element_2.ValidationStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "PENDING_VALIDATION") {
          return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Certificate.Status;
      };
      if (returnComparator() === "FAILED") {
        return { state: util_waiter_1.WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: util_waiter_1.WaiterState.FAILURE, reason };
    }
  }
  return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilCertificateValidated instead. waitForCertificateValidated does not throw error in non-success cases.
 */
const waitForCertificateValidated = async (params, input) => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCertificateValidated = waitForCertificateValidated;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCertificateCommand for polling.
 */
const waitUntilCertificateValidated = async (params, input) => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return util_waiter_1.checkExceptions(result);
};
exports.waitUntilCertificateValidated = waitUntilCertificateValidated;
//# sourceMappingURL=waitForCertificateValidated.js.map
