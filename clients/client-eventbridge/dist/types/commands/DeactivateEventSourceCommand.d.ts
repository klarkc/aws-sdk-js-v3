import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeactivateEventSourceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeactivateEventSourceCommandInput extends DeactivateEventSourceRequest {
}
export interface DeactivateEventSourceCommandOutput extends __MetadataBearer {
}
/**
 * <p>You can use this operation to temporarily stop receiving events from the specified partner
 *       event source. The matching event bus is not deleted. </p>
 *          <p>When you deactivate a partner event source, the source goes into PENDING state. If it
 *       remains in PENDING state for more than two weeks, it is deleted.</p>
 *          <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeactivateEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeactivateEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeactivateEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeactivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeactivateEventSourceCommand extends $Command<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DeactivateEventSourceCommandInput;
    constructor(input: DeactivateEventSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
