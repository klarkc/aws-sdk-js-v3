import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListLexBotsRequest, ListLexBotsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLexBotsCommandInput extends ListLexBotsRequest {
}
export interface ListLexBotsCommandOutput extends ListLexBotsResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all the Amazon Lex bots currently associated with the
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLexBotsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLexBotsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListLexBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLexBotsCommandInput} for command's `input` shape.
 * @see {@link ListLexBotsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLexBotsCommand extends $Command<ListLexBotsCommandInput, ListLexBotsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListLexBotsCommandInput;
    constructor(input: ListLexBotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLexBotsCommandInput, ListLexBotsCommandOutput>;
    private serialize;
    private deserialize;
}
