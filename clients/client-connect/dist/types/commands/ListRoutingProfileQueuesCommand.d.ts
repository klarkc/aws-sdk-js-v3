import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListRoutingProfileQueuesRequest, ListRoutingProfileQueuesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRoutingProfileQueuesCommandInput extends ListRoutingProfileQueuesRequest {
}
export interface ListRoutingProfileQueuesCommandOutput extends ListRoutingProfileQueuesResponse, __MetadataBearer {
}
/**
 * <p>Lists the queues associated with a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRoutingProfileQueuesCommand extends $Command<ListRoutingProfileQueuesCommandInput, ListRoutingProfileQueuesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListRoutingProfileQueuesCommandInput;
    constructor(input: ListRoutingProfileQueuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRoutingProfileQueuesCommandInput, ListRoutingProfileQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
