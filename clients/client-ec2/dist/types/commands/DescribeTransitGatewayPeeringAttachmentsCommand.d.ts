import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayPeeringAttachmentsRequest, DescribeTransitGatewayPeeringAttachmentsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTransitGatewayPeeringAttachmentsCommandInput extends DescribeTransitGatewayPeeringAttachmentsRequest {
}
export interface DescribeTransitGatewayPeeringAttachmentsCommandOutput extends DescribeTransitGatewayPeeringAttachmentsResult, __MetadataBearer {
}
/**
 * <p>Describes your transit gateway peering attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayPeeringAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command<DescribeTransitGatewayPeeringAttachmentsCommandInput, DescribeTransitGatewayPeeringAttachmentsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayPeeringAttachmentsCommandInput;
    constructor(input: DescribeTransitGatewayPeeringAttachmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayPeeringAttachmentsCommandInput, DescribeTransitGatewayPeeringAttachmentsCommandOutput>;
    private serialize;
    private deserialize;
}
