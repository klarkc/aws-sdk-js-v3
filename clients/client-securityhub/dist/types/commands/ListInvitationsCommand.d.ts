import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInvitationsCommandInput extends ListInvitationsRequest {
}
export interface ListInvitationsCommandOutput extends ListInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Lists all Security Hub membership invitations that were sent to the current AWS account.</p>
 *          <p>This operation is only used by accounts that are managed by invitation.
 *          Accounts that are managed using the integration with AWS Organizations do not receive invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInvitationsCommand extends $Command<ListInvitationsCommandInput, ListInvitationsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: ListInvitationsCommandInput;
    constructor(input: ListInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInvitationsCommandInput, ListInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
