import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { DescribeAlarmRequest, DescribeAlarmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAlarmCommandInput extends DescribeAlarmRequest {
}
export interface DescribeAlarmCommandOutput extends DescribeAlarmResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about an alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new DescribeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAlarmCommand extends $Command<DescribeAlarmCommandInput, DescribeAlarmCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: DescribeAlarmCommandInput;
    constructor(input: DescribeAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlarmCommandInput, DescribeAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
