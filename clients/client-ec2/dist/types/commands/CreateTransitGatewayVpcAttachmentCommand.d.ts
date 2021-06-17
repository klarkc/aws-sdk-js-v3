import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayVpcAttachmentRequest, CreateTransitGatewayVpcAttachmentResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayVpcAttachmentCommandInput extends CreateTransitGatewayVpcAttachmentRequest {
}
export interface CreateTransitGatewayVpcAttachmentCommandOutput extends CreateTransitGatewayVpcAttachmentResult, __MetadataBearer {
}
/**
 * <p>Attaches the specified VPC to the specified transit gateway.</p>
 *          <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached,
 *          the new VPC CIDR range is not propagated to the default propagation route table.</p>
 *          <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayVpcAttachmentCommand extends $Command<CreateTransitGatewayVpcAttachmentCommandInput, CreateTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayVpcAttachmentCommandInput;
    constructor(input: CreateTransitGatewayVpcAttachmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayVpcAttachmentCommandInput, CreateTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
