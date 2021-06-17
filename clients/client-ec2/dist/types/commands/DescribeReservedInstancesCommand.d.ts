import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesRequest, DescribeReservedInstancesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedInstancesCommandInput extends DescribeReservedInstancesRequest {
}
export interface DescribeReservedInstancesCommandOutput extends DescribeReservedInstancesResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of the Reserved Instances that you purchased.</p>
 *          <p>For more information about Reserved Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved
 * 				Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedInstancesCommand extends $Command<DescribeReservedInstancesCommandInput, DescribeReservedInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesCommandInput;
    constructor(input: DescribeReservedInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesCommandInput, DescribeReservedInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
