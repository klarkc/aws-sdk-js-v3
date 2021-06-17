import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayConnectsRequest, DescribeTransitGatewayConnectsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTransitGatewayConnectsCommandInput extends DescribeTransitGatewayConnectsRequest {
}
export interface DescribeTransitGatewayConnectsCommandOutput extends DescribeTransitGatewayConnectsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more Connect attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayConnectsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayConnectsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayConnectsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayConnectsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTransitGatewayConnectsCommand extends $Command<DescribeTransitGatewayConnectsCommandInput, DescribeTransitGatewayConnectsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayConnectsCommandInput;
    constructor(input: DescribeTransitGatewayConnectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayConnectsCommandInput, DescribeTransitGatewayConnectsCommandOutput>;
    private serialize;
    private deserialize;
}
