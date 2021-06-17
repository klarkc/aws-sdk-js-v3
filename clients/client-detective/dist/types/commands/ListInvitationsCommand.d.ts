import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInvitationsCommandInput extends ListInvitationsRequest {
}
export interface ListInvitationsCommandOutput extends ListInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the list of open and accepted behavior graph invitations for the member
 *          account. This operation can only be called by a member account.</p>
 *          <p>Open invitations are invitations that the member account has not responded to.</p>
 *          <p>The results do not include behavior graphs for which the member account declined the
 *          invitation. The results also do not include behavior graphs that the member account
 *          resigned from or was removed from.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListInvitationsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListInvitationsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInvitationsCommand extends $Command<ListInvitationsCommandInput, ListInvitationsCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: ListInvitationsCommandInput;
    constructor(input: ListInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInvitationsCommandInput, ListInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
