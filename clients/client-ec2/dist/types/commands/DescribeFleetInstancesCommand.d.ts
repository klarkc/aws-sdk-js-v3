import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetInstancesRequest, DescribeFleetInstancesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetInstancesCommandInput extends DescribeFleetInstancesRequest {
}
export interface DescribeFleetInstancesCommandOutput extends DescribeFleetInstancesResult, __MetadataBearer {
}
/**
 * <p>Describes the running instances for the specified EC2 Fleet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetInstancesCommand extends $Command<DescribeFleetInstancesCommandInput, DescribeFleetInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFleetInstancesCommandInput;
    constructor(input: DescribeFleetInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetInstancesCommandInput, DescribeFleetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
