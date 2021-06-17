import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListAlarmModelVersionsRequest, ListAlarmModelVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAlarmModelVersionsCommandInput extends ListAlarmModelVersionsRequest {
}
export interface ListAlarmModelVersionsCommandOutput extends ListAlarmModelVersionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the versions of an alarm model. The operation returns only the metadata
 *       associated with each alarm model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListAlarmModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAlarmModelVersionsCommand extends $Command<ListAlarmModelVersionsCommandInput, ListAlarmModelVersionsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: ListAlarmModelVersionsCommandInput;
    constructor(input: ListAlarmModelVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAlarmModelVersionsCommandInput, ListAlarmModelVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
