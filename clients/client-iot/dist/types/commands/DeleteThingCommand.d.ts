import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteThingRequest, DeleteThingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteThingCommandInput extends DeleteThingRequest {
}
export interface DeleteThingCommandOutput extends DeleteThingResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified thing. Returns successfully with no error if the deletion is
 * 			successful or you specify a thing that doesn't exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingCommandInput} for command's `input` shape.
 * @see {@link DeleteThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteThingCommand extends $Command<DeleteThingCommandInput, DeleteThingCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteThingCommandInput;
    constructor(input: DeleteThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThingCommandInput, DeleteThingCommandOutput>;
    private serialize;
    private deserialize;
}
