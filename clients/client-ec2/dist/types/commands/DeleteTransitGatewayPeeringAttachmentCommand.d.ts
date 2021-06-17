import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayPeeringAttachmentRequest, DeleteTransitGatewayPeeringAttachmentResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayPeeringAttachmentCommandInput extends DeleteTransitGatewayPeeringAttachmentRequest {
}
export interface DeleteTransitGatewayPeeringAttachmentCommandOutput extends DeleteTransitGatewayPeeringAttachmentResult, __MetadataBearer {
}
/**
 * <p>Deletes a transit gateway peering attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayPeeringAttachmentCommand extends $Command<DeleteTransitGatewayPeeringAttachmentCommandInput, DeleteTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: DeleteTransitGatewayPeeringAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayPeeringAttachmentCommandInput, DeleteTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
