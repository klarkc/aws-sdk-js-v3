import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptTransitGatewayMulticastDomainAssociationsRequest, AcceptTransitGatewayMulticastDomainAssociationsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptTransitGatewayMulticastDomainAssociationsCommandInput extends AcceptTransitGatewayMulticastDomainAssociationsRequest {
}
export interface AcceptTransitGatewayMulticastDomainAssociationsCommandOutput extends AcceptTransitGatewayMulticastDomainAssociationsResult, __MetadataBearer {
}
/**
 * <p>Accepts a request to associate subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptTransitGatewayMulticastDomainAssociationsCommand extends $Command<AcceptTransitGatewayMulticastDomainAssociationsCommandInput, AcceptTransitGatewayMulticastDomainAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptTransitGatewayMulticastDomainAssociationsCommandInput;
    constructor(input: AcceptTransitGatewayMulticastDomainAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptTransitGatewayMulticastDomainAssociationsCommandInput, AcceptTransitGatewayMulticastDomainAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
