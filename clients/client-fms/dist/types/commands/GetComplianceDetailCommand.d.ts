import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetComplianceDetailRequest, GetComplianceDetailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetComplianceDetailCommandInput extends GetComplianceDetailRequest {
}
export interface GetComplianceDetailCommandOutput extends GetComplianceDetailResponse, __MetadataBearer {
}
/**
 * <p>Returns detailed compliance information about the specified member account. Details
 *       include resources that are in and out of compliance with the specified policy. Resources are
 *       considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has
 *       not been applied to them. Resources are considered noncompliant for security group policies if
 *       they are in scope of the policy, they violate one or more of the policy rules, and remediation
 *         is disabled or not possible. Resources are considered noncompliant for Network Firewall policies
 *         if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet,
 *         if a subnet created by the Firewall Manager doesn't have the expected route table,
 *         and for modifications to a firewall policy that violate the Firewall Manager policy's rules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetComplianceDetailCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetComplianceDetailCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetComplianceDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceDetailCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetComplianceDetailCommand extends $Command<GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetComplianceDetailCommandInput;
    constructor(input: GetComplianceDetailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput>;
    private serialize;
    private deserialize;
}
