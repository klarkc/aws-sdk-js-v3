import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {
}
export interface ListEventSourcesCommandOutput extends ListEventSourcesResponse, __MetadataBearer {
}
/**
 * <p>You can use this to see all the partner event sources that have been shared with your AWS
 *       account. For more information about partner event sources, see <a>CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEventSourcesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEventSourcesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListEventSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventSourcesCommand extends $Command<ListEventSourcesCommandInput, ListEventSourcesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListEventSourcesCommandInput;
    constructor(input: ListEventSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventSourcesCommandInput, ListEventSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
