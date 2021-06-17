import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewaysRequest, DescribeTransitGatewaysResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTransitGatewaysCommandInput extends DescribeTransitGatewaysRequest {
}
export interface DescribeTransitGatewaysCommandOutput extends DescribeTransitGatewaysResult, __MetadataBearer {
}
/**
 * <p>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can
 *          filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTransitGatewaysCommand extends $Command<DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewaysCommandInput;
    constructor(input: DescribeTransitGatewaysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
