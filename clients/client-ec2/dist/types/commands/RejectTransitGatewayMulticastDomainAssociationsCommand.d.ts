import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectTransitGatewayMulticastDomainAssociationsRequest, RejectTransitGatewayMulticastDomainAssociationsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectTransitGatewayMulticastDomainAssociationsCommandInput extends RejectTransitGatewayMulticastDomainAssociationsRequest {
}
export interface RejectTransitGatewayMulticastDomainAssociationsCommandOutput extends RejectTransitGatewayMulticastDomainAssociationsResult, __MetadataBearer {
}
/**
 * <p>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectTransitGatewayMulticastDomainAssociationsCommand extends $Command<RejectTransitGatewayMulticastDomainAssociationsCommandInput, RejectTransitGatewayMulticastDomainAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectTransitGatewayMulticastDomainAssociationsCommandInput;
    constructor(input: RejectTransitGatewayMulticastDomainAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectTransitGatewayMulticastDomainAssociationsCommandInput, RejectTransitGatewayMulticastDomainAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
