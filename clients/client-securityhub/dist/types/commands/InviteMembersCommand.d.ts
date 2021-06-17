import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InviteMembersCommandInput extends InviteMembersRequest {
}
export interface InviteMembersCommandOutput extends InviteMembersResponse, __MetadataBearer {
}
/**
 * <p>Invites other AWS accounts to become member accounts for the Security Hub administrator account that
 *          the invitation is sent from.</p>
 *          <p>This operation is only used to invite accounts that do not belong to an organization.
 *          Organization accounts do not receive invitations.</p>
 *          <p>Before you can use this action to invite a member, you must first use the <code>
 *                <a>CreateMembers</a>
 *             </code> action to create the member account in Security Hub.</p>
 *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
 *          account, the administrator account can view the findings generated from the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, InviteMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, InviteMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InviteMembersCommand extends $Command<InviteMembersCommandInput, InviteMembersCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: InviteMembersCommandInput;
    constructor(input: InviteMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InviteMembersCommandInput, InviteMembersCommandOutput>;
    private serialize;
    private deserialize;
}
