import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayVpcAttachmentRequest, DeleteTransitGatewayVpcAttachmentResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTransitGatewayVpcAttachmentCommandInput extends DeleteTransitGatewayVpcAttachmentRequest {
}
export interface DeleteTransitGatewayVpcAttachmentCommandOutput extends DeleteTransitGatewayVpcAttachmentResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTransitGatewayVpcAttachmentCommand extends $Command<DeleteTransitGatewayVpcAttachmentCommandInput, DeleteTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayVpcAttachmentCommandInput;
    constructor(input: DeleteTransitGatewayVpcAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayVpcAttachmentCommandInput, DeleteTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
