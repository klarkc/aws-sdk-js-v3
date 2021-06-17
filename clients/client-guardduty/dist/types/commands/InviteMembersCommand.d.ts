import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InviteMembersCommandInput extends InviteMembersRequest {
}
export interface InviteMembersCommandOutput extends InviteMembersResponse, __MetadataBearer {
}
/**
 * <p>Invites other AWS accounts (created as members of the current AWS account by
 *       CreateMembers) to enable GuardDuty, and allow the current AWS account to view and manage these
 *       accounts' findings on their behalf as the GuardDuty administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, InviteMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, InviteMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InviteMembersCommand extends $Command<InviteMembersCommandInput, InviteMembersCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: InviteMembersCommandInput;
    constructor(input: InviteMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InviteMembersCommandInput, InviteMembersCommandOutput>;
    private serialize;
    private deserialize;
}
