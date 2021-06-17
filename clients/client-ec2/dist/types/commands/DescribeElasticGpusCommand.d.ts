import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeElasticGpusRequest, DescribeElasticGpusResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeElasticGpusCommandInput extends DescribeElasticGpusRequest {
}
export interface DescribeElasticGpusCommandOutput extends DescribeElasticGpusResult, __MetadataBearer {
}
/**
 * <p>Describes the Elastic Graphics accelerator associated with your instances. For more information
 *             about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeElasticGpusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeElasticGpusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeElasticGpusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticGpusCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticGpusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeElasticGpusCommand extends $Command<DescribeElasticGpusCommandInput, DescribeElasticGpusCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeElasticGpusCommandInput;
    constructor(input: DescribeElasticGpusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticGpusCommandInput, DescribeElasticGpusCommandOutput>;
    private serialize;
    private deserialize;
}
