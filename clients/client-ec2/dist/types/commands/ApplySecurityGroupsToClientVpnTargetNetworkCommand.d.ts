import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ApplySecurityGroupsToClientVpnTargetNetworkRequest, ApplySecurityGroupsToClientVpnTargetNetworkResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ApplySecurityGroupsToClientVpnTargetNetworkCommandInput extends ApplySecurityGroupsToClientVpnTargetNetworkRequest {
}
export interface ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput extends ApplySecurityGroupsToClientVpnTargetNetworkResult, __MetadataBearer {
}
/**
 * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing
 * 			security groups with the specified security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ApplySecurityGroupsToClientVpnTargetNetworkCommand extends $Command<ApplySecurityGroupsToClientVpnTargetNetworkCommandInput, ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput;
    constructor(input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApplySecurityGroupsToClientVpnTargetNetworkCommandInput, ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
