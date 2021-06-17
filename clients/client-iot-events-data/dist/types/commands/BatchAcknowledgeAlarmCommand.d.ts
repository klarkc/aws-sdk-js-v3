import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchAcknowledgeAlarmCommandInput extends BatchAcknowledgeAlarmRequest {
}
export interface BatchAcknowledgeAlarmCommandOutput extends BatchAcknowledgeAlarmResponse, __MetadataBearer {
}
/**
 * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
 *       after you acknowledge them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchAcknowledgeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAcknowledgeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchAcknowledgeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchAcknowledgeAlarmCommand extends $Command<BatchAcknowledgeAlarmCommandInput, BatchAcknowledgeAlarmCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: BatchAcknowledgeAlarmCommandInput;
    constructor(input: BatchAcknowledgeAlarmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAcknowledgeAlarmCommandInput, BatchAcknowledgeAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
