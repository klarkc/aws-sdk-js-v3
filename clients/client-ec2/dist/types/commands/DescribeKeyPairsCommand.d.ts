import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeKeyPairsRequest, DescribeKeyPairsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeKeyPairsCommandInput extends DescribeKeyPairsRequest {
}
export interface DescribeKeyPairsCommandOutput extends DescribeKeyPairsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified key pairs or all of your key pairs.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeKeyPairsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeKeyPairsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKeyPairsCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeKeyPairsCommand extends $Command<DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeKeyPairsCommandInput;
    constructor(input: DescribeKeyPairsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput>;
    private serialize;
    private deserialize;
}
