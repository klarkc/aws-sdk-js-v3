import { ACMClient } from "../ACMClient";
import { DescribeCertificateCommandInput } from "../commands/DescribeCertificateCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilCertificateValidated instead. waitForCertificateValidated does not throw error in non-success cases.
 */
export declare const waitForCertificateValidated: (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeCertificateCommandInput
) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCertificateCommand for polling.
 */
export declare const waitUntilCertificateValidated: (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeCertificateCommandInput
) => Promise<WaiterResult>;
