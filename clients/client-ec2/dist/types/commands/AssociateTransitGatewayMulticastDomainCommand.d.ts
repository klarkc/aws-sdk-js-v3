import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateTransitGatewayMulticastDomainRequest, AssociateTransitGatewayMulticastDomainResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateTransitGatewayMulticastDomainCommandInput extends AssociateTransitGatewayMulticastDomainRequest {
}
export interface AssociateTransitGatewayMulticastDomainCommandOutput extends AssociateTransitGatewayMulticastDomainResult, __MetadataBearer {
}
/**
 * <p>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.</p>
 *         <p>The transit gateway attachment must be in the available state before you can add a resource. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html">DescribeTransitGatewayAttachments</a> to see the state of the attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateTransitGatewayMulticastDomainCommand extends $Command<AssociateTransitGatewayMulticastDomainCommandInput, AssociateTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateTransitGatewayMulticastDomainCommandInput;
    constructor(input: AssociateTransitGatewayMulticastDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTransitGatewayMulticastDomainCommandInput, AssociateTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
