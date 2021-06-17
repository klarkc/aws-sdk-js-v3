import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectTransitGatewayPeeringAttachmentRequest, RejectTransitGatewayPeeringAttachmentResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectTransitGatewayPeeringAttachmentCommandInput extends RejectTransitGatewayPeeringAttachmentRequest {
}
export interface RejectTransitGatewayPeeringAttachmentCommandOutput extends RejectTransitGatewayPeeringAttachmentResult, __MetadataBearer {
}
/**
 * <p>Rejects a transit gateway peering attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectTransitGatewayPeeringAttachmentCommand extends $Command<RejectTransitGatewayPeeringAttachmentCommandInput, RejectTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: RejectTransitGatewayPeeringAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectTransitGatewayPeeringAttachmentCommandInput, RejectTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
