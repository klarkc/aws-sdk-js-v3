import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DisassociateMembersRequest, DisassociateMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMembersCommandInput extends DisassociateMembersRequest {
}
export interface DisassociateMembersCommandOutput extends DisassociateMembersResponse, __MetadataBearer {
}
/**
 * <p>Disassociates GuardDuty member accounts (to the current GuardDuty administrator account)
 *       specified by the account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DisassociateMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DisassociateMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DisassociateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembersCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMembersCommand extends $Command<DisassociateMembersCommandInput, DisassociateMembersCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DisassociateMembersCommandInput;
    constructor(input: DisassociateMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMembersCommandInput, DisassociateMembersCommandOutput>;
    private serialize;
    private deserialize;
}
