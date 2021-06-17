import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFlowLogsRequest, CreateFlowLogsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFlowLogsCommandInput extends CreateFlowLogsRequest {
}
export interface CreateFlowLogsCommandOutput extends CreateFlowLogsResult, __MetadataBearer {
}
/**
 * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface,
 *             subnet, or VPC. </p>
 *
 *         <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events
 *             consisting of fields that describe the traffic flow. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a>
 *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *
 *         <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network
 *             interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all
 *             of the monitored network interfaces are published to a single log file object that is stored in the specified
 *             bucket.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlowLogsCommandInput} for command's `input` shape.
 * @see {@link CreateFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFlowLogsCommand extends $Command<CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateFlowLogsCommandInput;
    constructor(input: CreateFlowLogsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput>;
    private serialize;
    private deserialize;
}
