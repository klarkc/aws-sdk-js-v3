import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInsightsAnalysesRequest, DescribeNetworkInsightsAnalysesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNetworkInsightsAnalysesCommandInput extends DescribeNetworkInsightsAnalysesRequest {
}
export interface DescribeNetworkInsightsAnalysesCommandOutput extends DescribeNetworkInsightsAnalysesResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your network insights analyses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAnalysesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAnalysesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInsightsAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInsightsAnalysesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAnalysesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNetworkInsightsAnalysesCommand extends $Command<DescribeNetworkInsightsAnalysesCommandInput, DescribeNetworkInsightsAnalysesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInsightsAnalysesCommandInput;
    constructor(input: DescribeNetworkInsightsAnalysesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInsightsAnalysesCommandInput, DescribeNetworkInsightsAnalysesCommandOutput>;
    private serialize;
    private deserialize;
}
