import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFlowLogsRequest, DescribeFlowLogsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFlowLogsCommandInput extends DescribeFlowLogsRequest {
}
export interface DescribeFlowLogsCommandOutput extends DescribeFlowLogsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more flow logs. To view the information in your flow logs (the log
 *             streams for the network interfaces), you must use the CloudWatch Logs console or the CloudWatch Logs
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlowLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFlowLogsCommand extends $Command<DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFlowLogsCommandInput;
    constructor(input: DescribeFlowLogsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput>;
    private serialize;
    private deserialize;
}
