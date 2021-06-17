import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateEventBusRequest, CreateEventBusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEventBusCommandInput extends CreateEventBusRequest {
}
export interface CreateEventBusCommandOutput extends CreateEventBusResponse, __MetadataBearer {
}
/**
 * <p>Creates a new event bus within your account. This can be a custom event bus which you can
 *       use to receive events from your custom applications and services, or it can be a partner event
 *       bus which can be matched to a partner event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new CreateEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventBusCommandInput} for command's `input` shape.
 * @see {@link CreateEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEventBusCommand extends $Command<CreateEventBusCommandInput, CreateEventBusCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: CreateEventBusCommandInput;
    constructor(input: CreateEventBusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventBusCommandInput, CreateEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
