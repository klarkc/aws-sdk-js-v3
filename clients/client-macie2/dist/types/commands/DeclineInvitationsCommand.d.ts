import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {
}
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Declines Amazon Macie membership invitations that were received from specific accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeclineInvitationsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeclineInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeclineInvitationsCommand extends $Command<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DeclineInvitationsCommandInput;
    constructor(input: DeclineInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
