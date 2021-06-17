import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUsersCommandInput extends ListUsersRequest {
}
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {
}
/**
 * <p>Lists the attribute name and value of the user that you specified in the search. We only support <code>UserName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>UserId</code> and <code>UserName</code> in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListUsersCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, ListUsersCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUsersCommand extends $Command<ListUsersCommandInput, ListUsersCommandOutput, IdentitystoreClientResolvedConfig> {
    readonly input: ListUsersCommandInput;
    constructor(input: ListUsersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentitystoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUsersCommandInput, ListUsersCommandOutput>;
    private serialize;
    private deserialize;
}
