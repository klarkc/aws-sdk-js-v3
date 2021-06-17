import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { UpdateInputRequest, UpdateInputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInputCommandInput extends UpdateInputRequest {
}
export interface UpdateInputCommandOutput extends UpdateInputResponse, __MetadataBearer {
}
/**
 * <p>Updates an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new UpdateInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInputCommandInput} for command's `input` shape.
 * @see {@link UpdateInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInputCommand extends $Command<UpdateInputCommandInput, UpdateInputCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: UpdateInputCommandInput;
    constructor(input: UpdateInputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInputCommandInput, UpdateInputCommandOutput>;
    private serialize;
    private deserialize;
}
