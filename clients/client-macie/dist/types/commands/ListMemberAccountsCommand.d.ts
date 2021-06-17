import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { ListMemberAccountsRequest, ListMemberAccountsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMemberAccountsCommandInput extends ListMemberAccountsRequest {
}
export interface ListMemberAccountsCommandOutput extends ListMemberAccountsResult, __MetadataBearer {
}
/**
 * <p>Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListMemberAccountsCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListMemberAccountsCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMemberAccountsCommand extends $Command<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput, MacieClientResolvedConfig> {
    readonly input: ListMemberAccountsCommandInput;
    constructor(input: ListMemberAccountsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
