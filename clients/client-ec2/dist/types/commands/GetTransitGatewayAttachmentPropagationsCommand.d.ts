import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayAttachmentPropagationsRequest, GetTransitGatewayAttachmentPropagationsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTransitGatewayAttachmentPropagationsCommandInput extends GetTransitGatewayAttachmentPropagationsRequest {
}
export interface GetTransitGatewayAttachmentPropagationsCommandOutput extends GetTransitGatewayAttachmentPropagationsResult, __MetadataBearer {
}
/**
 * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayAttachmentPropagationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTransitGatewayAttachmentPropagationsCommand extends $Command<GetTransitGatewayAttachmentPropagationsCommandInput, GetTransitGatewayAttachmentPropagationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayAttachmentPropagationsCommandInput;
    constructor(input: GetTransitGatewayAttachmentPropagationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayAttachmentPropagationsCommandInput, GetTransitGatewayAttachmentPropagationsCommandOutput>;
    private serialize;
    private deserialize;
}
