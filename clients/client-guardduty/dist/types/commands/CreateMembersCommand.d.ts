import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateMembersRequest, CreateMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMembersCommandInput extends CreateMembersRequest {
}
export interface CreateMembersCommandOutput extends CreateMembersResponse, __MetadataBearer {
}
/**
 * <p>Creates member accounts of the current AWS account by specifying a list of AWS account
 *       IDs. This step is a prerequisite for managing the associated member accounts either by
 *       invitation or through an organization.</p>
 *          <p>When using <code>Create Members</code> as an organizations delegated administrator this
 *       action will enable GuardDuty in the added member accounts, with the exception of the
 *       organization delegated administrator account, which must enable GuardDuty prior to being added as a
 *       member.</p>
 *          <p>If you are adding accounts by invitation use this action after GuardDuty has been enabled
 *       in potential member accounts and before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">
 *                <code>Invite
 *         Members</code>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMembersCommand extends $Command<CreateMembersCommandInput, CreateMembersCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: CreateMembersCommandInput;
    constructor(input: CreateMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMembersCommandInput, CreateMembersCommandOutput>;
    private serialize;
    private deserialize;
}
