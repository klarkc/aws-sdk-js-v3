import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { CreateAlarmModelRequest, CreateAlarmModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAlarmModelCommandInput extends CreateAlarmModelRequest {
}
export interface CreateAlarmModelCommandOutput extends CreateAlarmModelResponse, __MetadataBearer {
}
/**
 * <p>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
 *       notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an
 *         alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new CreateAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlarmModelCommandInput} for command's `input` shape.
 * @see {@link CreateAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAlarmModelCommand extends $Command<CreateAlarmModelCommandInput, CreateAlarmModelCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: CreateAlarmModelCommandInput;
    constructor(input: CreateAlarmModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAlarmModelCommandInput, CreateAlarmModelCommandOutput>;
    private serialize;
    private deserialize;
}
