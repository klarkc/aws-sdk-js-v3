import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayPeeringAttachmentRequest, CreateTransitGatewayPeeringAttachmentResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayPeeringAttachmentCommandInput extends CreateTransitGatewayPeeringAttachmentRequest {
}
export interface CreateTransitGatewayPeeringAttachmentCommandOutput extends CreateTransitGatewayPeeringAttachmentResult, __MetadataBearer {
}
/**
 * <p>Requests a transit gateway peering attachment between the specified transit gateway
 *             (requester) and a peer transit gateway (accepter). The transit gateways must be in
 *             different Regions. The peer transit gateway can be in your account or a different AWS
 *             account. </p>
 *          <p>After you create the peering attachment, the owner of the accepter
 *             transit gateway must accept the attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayPeeringAttachmentCommand extends $Command<CreateTransitGatewayPeeringAttachmentCommandInput, CreateTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: CreateTransitGatewayPeeringAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayPeeringAttachmentCommandInput, CreateTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
