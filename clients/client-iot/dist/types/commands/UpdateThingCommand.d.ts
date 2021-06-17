import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateThingRequest, UpdateThingResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThingCommandInput extends UpdateThingRequest {
}
export interface UpdateThingCommandOutput extends UpdateThingResponse, __MetadataBearer {
}
/**
 * <p>Updates the data for a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThingCommand extends $Command<UpdateThingCommandInput, UpdateThingCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateThingCommandInput;
    constructor(input: UpdateThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThingCommandInput, UpdateThingCommandOutput>;
    private serialize;
    private deserialize;
}
