import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventBusesRequest, ListEventBusesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventBusesCommandInput extends ListEventBusesRequest {
}
export interface ListEventBusesCommandOutput extends ListEventBusesResponse, __MetadataBearer {
}
/**
 * <p>Lists all the event buses in your account, including the default event bus, custom event
 *       buses, and partner event buses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEventBusesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEventBusesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListEventBusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventBusesCommandInput} for command's `input` shape.
 * @see {@link ListEventBusesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventBusesCommand extends $Command<ListEventBusesCommandInput, ListEventBusesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListEventBusesCommandInput;
    constructor(input: ListEventBusesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventBusesCommandInput, ListEventBusesCommandOutput>;
    private serialize;
    private deserialize;
}
