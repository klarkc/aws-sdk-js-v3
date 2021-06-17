import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateTransitGatewayMulticastDomainRequest, DisassociateTransitGatewayMulticastDomainResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateTransitGatewayMulticastDomainCommandInput extends DisassociateTransitGatewayMulticastDomainRequest {
}
export interface DisassociateTransitGatewayMulticastDomainCommandOutput extends DisassociateTransitGatewayMulticastDomainResult, __MetadataBearer {
}
/**
 * <p>Disassociates the specified subnets from the transit gateway multicast domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateTransitGatewayMulticastDomainCommand extends $Command<DisassociateTransitGatewayMulticastDomainCommandInput, DisassociateTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateTransitGatewayMulticastDomainCommandInput;
    constructor(input: DisassociateTransitGatewayMulticastDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTransitGatewayMulticastDomainCommandInput, DisassociateTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
