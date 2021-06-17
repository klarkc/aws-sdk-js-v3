import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptTransitGatewayPeeringAttachmentRequest, AcceptTransitGatewayPeeringAttachmentResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptTransitGatewayPeeringAttachmentCommandInput extends AcceptTransitGatewayPeeringAttachmentRequest {
}
export interface AcceptTransitGatewayPeeringAttachmentCommandOutput extends AcceptTransitGatewayPeeringAttachmentResult, __MetadataBearer {
}
/**
 * <p>Accepts a transit gateway peering attachment request. The peering attachment must be
 *             in the <code>pendingAcceptance</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptTransitGatewayPeeringAttachmentCommand extends $Command<AcceptTransitGatewayPeeringAttachmentCommandInput, AcceptTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: AcceptTransitGatewayPeeringAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptTransitGatewayPeeringAttachmentCommandInput, AcceptTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
