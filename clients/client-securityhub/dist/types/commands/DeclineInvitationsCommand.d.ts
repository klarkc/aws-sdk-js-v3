import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DeclineInvitationsRequest } from "../models/models_0";
import { DeclineInvitationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {
}
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Declines invitations to become a member account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization.
 *          Organization accounts do not receive invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeclineInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeclineInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeclineInvitationsCommand extends $Command<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DeclineInvitationsCommandInput;
    constructor(input: DeclineInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
