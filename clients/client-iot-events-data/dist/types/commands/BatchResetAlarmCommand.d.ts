import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchResetAlarmRequest, BatchResetAlarmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchResetAlarmCommandInput extends BatchResetAlarmRequest {
}
export interface BatchResetAlarmCommandOutput extends BatchResetAlarmResponse, __MetadataBearer {
}
/**
 * <p>Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you
 *       reset them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchResetAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchResetAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchResetAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchResetAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchResetAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchResetAlarmCommand extends $Command<BatchResetAlarmCommandInput, BatchResetAlarmCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: BatchResetAlarmCommandInput;
    constructor(input: BatchResetAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchResetAlarmCommandInput, BatchResetAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
