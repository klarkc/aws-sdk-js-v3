import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ActivateEventSourceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ActivateEventSourceCommandInput extends ActivateEventSourceRequest {
}
export interface ActivateEventSourceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Activates a partner event source that has been deactivated. Once activated, your matching
 *       event bus will start receiving events from the event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ActivateEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ActivateEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ActivateEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link ActivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ActivateEventSourceCommand extends $Command<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ActivateEventSourceCommandInput;
    constructor(input: ActivateEventSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
