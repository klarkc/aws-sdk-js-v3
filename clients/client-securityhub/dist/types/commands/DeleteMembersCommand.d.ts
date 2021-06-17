import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMembersCommandInput extends DeleteMembersRequest {
}
export interface DeleteMembersCommandOutput extends DeleteMembersResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified member accounts from Security Hub.</p>
 *          <p>Can be used to delete member accounts that belong to an organization as well as member
 *          accounts that were invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMembersCommandInput} for command's `input` shape.
 * @see {@link DeleteMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMembersCommand extends $Command<DeleteMembersCommandInput, DeleteMembersCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DeleteMembersCommandInput;
    constructor(input: DeleteMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMembersCommandInput, DeleteMembersCommandOutput>;
    private serialize;
    private deserialize;
}
