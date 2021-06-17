import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterTransitGatewayMulticastGroupSourcesRequest, DeregisterTransitGatewayMulticastGroupSourcesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterTransitGatewayMulticastGroupSourcesCommandInput extends DeregisterTransitGatewayMulticastGroupSourcesRequest {
}
export interface DeregisterTransitGatewayMulticastGroupSourcesCommandOutput extends DeregisterTransitGatewayMulticastGroupSourcesResult, __MetadataBearer {
}
/**
 * <p>Deregisters the specified sources (network interfaces) from the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTransitGatewayMulticastGroupSourcesCommand extends $Command<DeregisterTransitGatewayMulticastGroupSourcesCommandInput, DeregisterTransitGatewayMulticastGroupSourcesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput;
    constructor(input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTransitGatewayMulticastGroupSourcesCommandInput, DeregisterTransitGatewayMulticastGroupSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
