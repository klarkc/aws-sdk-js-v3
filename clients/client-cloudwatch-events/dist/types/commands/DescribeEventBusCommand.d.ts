import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribeEventBusRequest, DescribeEventBusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventBusCommandInput extends DescribeEventBusRequest {
}
export interface DescribeEventBusCommandOutput extends DescribeEventBusResponse, __MetadataBearer {
}
/**
 * <p>Displays details about an event bus in your account. This can include the external AWS
 *       accounts that are permitted to write events to your default event bus, and the associated
 *       policy. For custom event buses and partner event buses, it displays the name, ARN, policy,
 *       state, and creation time.</p>
 *          <p> To enable your account to receive events from other accounts on its default event bus,
 *       use <a>PutPermission</a>.</p>
 *          <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventBusCommand extends $Command<DescribeEventBusCommandInput, DescribeEventBusCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DescribeEventBusCommandInput;
    constructor(input: DescribeEventBusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventBusCommandInput, DescribeEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
