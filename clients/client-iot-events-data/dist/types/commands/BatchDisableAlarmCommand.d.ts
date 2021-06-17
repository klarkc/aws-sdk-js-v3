import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchDisableAlarmRequest, BatchDisableAlarmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDisableAlarmCommandInput extends BatchDisableAlarmRequest {
}
export interface BatchDisableAlarmCommandOutput extends BatchDisableAlarmResponse, __MetadataBearer {
}
/**
 * <p>Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after
 *       you disable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchDisableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchDisableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchDisableAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchDisableAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDisableAlarmCommand extends $Command<BatchDisableAlarmCommandInput, BatchDisableAlarmCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: BatchDisableAlarmCommandInput;
    constructor(input: BatchDisableAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisableAlarmCommandInput, BatchDisableAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
