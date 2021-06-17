import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { ListAlarmsRequest, ListAlarmsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAlarmsCommandInput extends ListAlarmsRequest {
}
export interface ListAlarmsCommandOutput extends ListAlarmsResponse, __MetadataBearer {
}
/**
 * <p>Lists one or more alarms. The operation returns only the metadata associated with each
 *       alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, ListAlarmsCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, ListAlarmsCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new ListAlarmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAlarmsCommand extends $Command<ListAlarmsCommandInput, ListAlarmsCommandOutput, IoTEventsDataClientResolvedConfig> {
    readonly input: ListAlarmsCommandInput;
    constructor(input: ListAlarmsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAlarmsCommandInput, ListAlarmsCommandOutput>;
    private serialize;
    private deserialize;
}
