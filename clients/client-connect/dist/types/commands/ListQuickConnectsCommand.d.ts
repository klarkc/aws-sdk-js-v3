import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListQuickConnectsRequest, ListQuickConnectsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListQuickConnectsCommandInput extends ListQuickConnectsRequest {
}
export interface ListQuickConnectsCommandOutput extends ListQuickConnectsResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Provides information about the quick connects for the specified Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListQuickConnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link ListQuickConnectsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListQuickConnectsCommand extends $Command<ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListQuickConnectsCommandInput;
    constructor(input: ListQuickConnectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput>;
    private serialize;
    private deserialize;
}
