import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteEventBusRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEventBusCommandInput extends DeleteEventBusRequest {
}
export interface DeleteEventBusCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified custom event bus or partner event bus. All rules associated with
 *       this event bus need to be deleted. You can't delete your account's default event bus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeleteEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeleteEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeleteEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventBusCommandInput} for command's `input` shape.
 * @see {@link DeleteEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEventBusCommand extends $Command<DeleteEventBusCommandInput, DeleteEventBusCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DeleteEventBusCommandInput;
    constructor(input: DeleteEventBusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventBusCommandInput, DeleteEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
