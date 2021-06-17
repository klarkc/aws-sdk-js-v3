import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptInvitationCommandInput extends AcceptInvitationRequest {
}
export interface AcceptInvitationCommandOutput extends AcceptInvitationResponse, __MetadataBearer {
}
/**
 * <p>Accepts the invitation to be monitored by a GuardDuty administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, AcceptInvitationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, AcceptInvitationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptInvitationCommand extends $Command<AcceptInvitationCommandInput, AcceptInvitationCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: AcceptInvitationCommandInput;
    constructor(input: AcceptInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptInvitationCommandInput, AcceptInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
