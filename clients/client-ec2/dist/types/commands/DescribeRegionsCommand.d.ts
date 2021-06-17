import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeRegionsRequest, DescribeRegionsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRegionsCommandInput extends DescribeRegionsRequest {
}
export interface DescribeRegionsCommandOutput extends DescribeRegionsResult, __MetadataBearer {
}
/**
 * <p>Describes the Regions that are enabled for your account, or all Regions.</p>
 *          <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ec2_region">
 *        Regions and Endpoints</a>.</p>
 *          <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>AWS General Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRegionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRegionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRegionsCommand extends $Command<DescribeRegionsCommandInput, DescribeRegionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeRegionsCommandInput;
    constructor(input: DescribeRegionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRegionsCommandInput, DescribeRegionsCommandOutput>;
    private serialize;
    private deserialize;
}
