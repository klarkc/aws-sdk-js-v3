import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListQueuesRequest, ListQueuesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListQueuesCommandInput extends ListQueuesRequest {
}
export interface ListQueuesCommandOutput extends ListQueuesResponse, __MetadataBearer {
}
/**
 * <p>Provides information about the queues for the specified Amazon Connect instance.</p>
 *          <p>If you do not specify a <code>QueueTypes</code>
 *    parameter, both standard and agent queues are returned. This might cause an unexpected truncation
 *    of results if you have more than 1000 agents and you limit the number of results of the API call
 *    in code.</p>
 *          <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and
 *     Agent</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListQueuesCommand extends $Command<ListQueuesCommandInput, ListQueuesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListQueuesCommandInput;
    constructor(input: ListQueuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueuesCommandInput, ListQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
