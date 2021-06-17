import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptInvitationCommandInput extends AcceptInvitationRequest {
}
export interface AcceptInvitationCommandOutput extends AcceptInvitationResponse, __MetadataBearer {
}
/**
 * <p>Accepts an Amazon Macie membership invitation that was received from a specific account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, AcceptInvitationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, AcceptInvitationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptInvitationCommand extends $Command<AcceptInvitationCommandInput, AcceptInvitationCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: AcceptInvitationCommandInput;
    constructor(input: AcceptInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptInvitationCommandInput, AcceptInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
