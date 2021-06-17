import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetHistoryCommandInput extends DescribeFleetHistoryRequest {
}
export interface DescribeFleetHistoryCommandOutput extends DescribeFleetHistoryResult, __MetadataBearer {
}
/**
 * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
 *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
 *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
 *          are available for 48 hours.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetHistoryCommand extends $Command<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFleetHistoryCommandInput;
    constructor(input: DescribeFleetHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
