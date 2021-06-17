import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchSnoozeAlarmRequest, BatchSnoozeAlarmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchSnoozeAlarmCommandInput extends BatchSnoozeAlarmRequest {
}
export interface BatchSnoozeAlarmCommandOutput extends BatchSnoozeAlarmResponse, __MetadataBearer {
}
/**
 * <p>Changes one or more alarms to the snooze mode. The alarms change to the
 *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchSnoozeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchSnoozeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchSnoozeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSnoozeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchSnoozeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchSnoozeAlarmCommand extends $Command<BatchSnoozeAlarmCommandInput, BatchSnoozeAlarmCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: BatchSnoozeAlarmCommandInput;
    constructor(input: BatchSnoozeAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchSnoozeAlarmCommandInput, BatchSnoozeAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
