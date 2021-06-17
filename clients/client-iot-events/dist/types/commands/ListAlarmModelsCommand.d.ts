import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListAlarmModelsRequest, ListAlarmModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAlarmModelsCommandInput extends ListAlarmModelsRequest {
}
export interface ListAlarmModelsCommandOutput extends ListAlarmModelsResponse, __MetadataBearer {
}
/**
 * <p>Lists the alarm models that you created. The operation returns only the metadata
 *       associated with each alarm model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListAlarmModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmModelsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAlarmModelsCommand extends $Command<ListAlarmModelsCommandInput, ListAlarmModelsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: ListAlarmModelsCommandInput;
    constructor(input: ListAlarmModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAlarmModelsCommandInput, ListAlarmModelsCommandOutput>;
    private serialize;
    private deserialize;
}
