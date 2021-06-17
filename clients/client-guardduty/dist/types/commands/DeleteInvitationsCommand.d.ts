import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInvitationsCommandInput extends DeleteInvitationsRequest {
}
export interface DeleteInvitationsCommandOutput extends DeleteInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Deletes invitations sent to the current member account by AWS accounts specified by their
 *       account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeleteInvitationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInvitationsCommand extends $Command<DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DeleteInvitationsCommandInput;
    constructor(input: DeleteInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
