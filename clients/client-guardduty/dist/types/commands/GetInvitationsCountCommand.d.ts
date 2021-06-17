import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInvitationsCountCommandInput extends GetInvitationsCountRequest {
}
export interface GetInvitationsCountCommandOutput extends GetInvitationsCountResponse, __MetadataBearer {
}
/**
 * <p>Returns the count of all GuardDuty membership invitations that were sent to the current
 *       member account except the currently accepted invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetInvitationsCountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetInvitationsCountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInvitationsCountCommand extends $Command<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: GetInvitationsCountCommandInput;
    constructor(input: GetInvitationsCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput>;
    private serialize;
    private deserialize;
}
