import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DeleteAlarmModelRequest, DeleteAlarmModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAlarmModelCommandInput extends DeleteAlarmModelRequest {
}
export interface DeleteAlarmModelCommandOutput extends DeleteAlarmModelResponse, __MetadataBearer {
}
/**
 * <p>Deletes an alarm model. Any alarm instances that were created based on this alarm model
 *       are also deleted. This action can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DeleteAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlarmModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAlarmModelCommand extends $Command<DeleteAlarmModelCommandInput, DeleteAlarmModelCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: DeleteAlarmModelCommandInput;
    constructor(input: DeleteAlarmModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAlarmModelCommandInput, DeleteAlarmModelCommandOutput>;
    private serialize;
    private deserialize;
}
