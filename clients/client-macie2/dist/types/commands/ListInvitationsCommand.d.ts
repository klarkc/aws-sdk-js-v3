import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInvitationsCommandInput extends ListInvitationsRequest {
}
export interface ListInvitationsCommandOutput extends ListInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about all the Amazon Macie membership invitations that were received by an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListInvitationsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInvitationsCommand extends $Command<ListInvitationsCommandInput, ListInvitationsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: ListInvitationsCommandInput;
    constructor(input: ListInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInvitationsCommandInput, ListInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
