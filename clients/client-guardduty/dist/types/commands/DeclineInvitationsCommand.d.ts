import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {
}
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Declines invitations sent to the current member account by AWS accounts specified by their
 *       account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeclineInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeclineInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeclineInvitationsCommand extends $Command<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DeclineInvitationsCommandInput;
    constructor(input: DeclineInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
