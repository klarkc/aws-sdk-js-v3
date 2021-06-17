import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListMemberAccountsRequest, ListMemberAccountsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMemberAccountsCommandInput extends ListMemberAccountsRequest {
}
export interface ListMemberAccountsCommandOutput extends ListMemberAccountsResponse, __MetadataBearer {
}
/**
 * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
 *       administrator's AWS organization.</p>
 *          <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the
 *       AWS Firewall Manager administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListMemberAccountsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListMemberAccountsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMemberAccountsCommand extends $Command<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListMemberAccountsCommandInput;
    constructor(input: ListMemberAccountsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
