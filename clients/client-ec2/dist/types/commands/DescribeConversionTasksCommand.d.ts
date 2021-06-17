import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeConversionTasksRequest, DescribeConversionTasksResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConversionTasksCommandInput extends DescribeConversionTasksRequest {
}
export interface DescribeConversionTasksCommandOutput extends DescribeConversionTasksResult, __MetadataBearer {
}
/**
 * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the
 *    <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeConversionTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeConversionTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeConversionTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConversionTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeConversionTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConversionTasksCommand extends $Command<DescribeConversionTasksCommandInput, DescribeConversionTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeConversionTasksCommandInput;
    constructor(input: DescribeConversionTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConversionTasksCommandInput, DescribeConversionTasksCommandOutput>;
    private serialize;
    private deserialize;
}
