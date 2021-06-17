import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchEnableAlarmRequest, BatchEnableAlarmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchEnableAlarmCommandInput extends BatchEnableAlarmRequest {
}
export interface BatchEnableAlarmCommandOutput extends BatchEnableAlarmResponse, __MetadataBearer {
}
/**
 * <p>Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you
 *       enable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchEnableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchEnableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchEnableAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEnableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchEnableAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchEnableAlarmCommand extends $Command<BatchEnableAlarmCommandInput, BatchEnableAlarmCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: BatchEnableAlarmCommandInput;
    constructor(input: BatchEnableAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchEnableAlarmCommandInput, BatchEnableAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
