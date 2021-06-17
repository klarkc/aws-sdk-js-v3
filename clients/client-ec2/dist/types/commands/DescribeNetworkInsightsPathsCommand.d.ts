import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInsightsPathsRequest, DescribeNetworkInsightsPathsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNetworkInsightsPathsCommandInput extends DescribeNetworkInsightsPathsRequest {
}
export interface DescribeNetworkInsightsPathsCommandOutput extends DescribeNetworkInsightsPathsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your paths.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsPathsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsPathsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInsightsPathsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInsightsPathsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsPathsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNetworkInsightsPathsCommand extends $Command<DescribeNetworkInsightsPathsCommandInput, DescribeNetworkInsightsPathsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInsightsPathsCommandInput;
    constructor(input: DescribeNetworkInsightsPathsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInsightsPathsCommandInput, DescribeNetworkInsightsPathsCommandOutput>;
    private serialize;
    private deserialize;
}
