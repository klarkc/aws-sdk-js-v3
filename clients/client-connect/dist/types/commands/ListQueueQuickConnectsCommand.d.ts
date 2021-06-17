import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListQueueQuickConnectsRequest, ListQueueQuickConnectsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListQueueQuickConnectsCommandInput extends ListQueueQuickConnectsRequest {
}
export interface ListQueueQuickConnectsCommandOutput extends ListQueueQuickConnectsResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists the quick connects associated with a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueueQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueueQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQueueQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueueQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQueueQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListQueueQuickConnectsCommand extends $Command<ListQueueQuickConnectsCommandInput, ListQueueQuickConnectsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListQueueQuickConnectsCommandInput;
    constructor(input: ListQueueQuickConnectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueueQuickConnectsCommandInput, ListQueueQuickConnectsCommandOutput>;
    private serialize;
    private deserialize;
}
