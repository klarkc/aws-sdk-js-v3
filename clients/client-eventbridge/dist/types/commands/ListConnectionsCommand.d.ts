import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListConnectionsRequest, ListConnectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConnectionsCommandInput extends ListConnectionsRequest {
}
export interface ListConnectionsCommandOutput extends ListConnectionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of connections from the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListConnectionsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListConnectionsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConnectionsCommand extends $Command<ListConnectionsCommandInput, ListConnectionsCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListConnectionsCommandInput;
    constructor(input: ListConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConnectionsCommandInput, ListConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
