import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListShareInvitationsInput, ListShareInvitationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListShareInvitationsCommandInput extends ListShareInvitationsInput {
}
export interface ListShareInvitationsCommandOutput extends ListShareInvitationsOutput, __MetadataBearer {
}
/**
 * <p>List  the workload invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListShareInvitationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListShareInvitationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListShareInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListShareInvitationsCommand extends $Command<ListShareInvitationsCommandInput, ListShareInvitationsCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListShareInvitationsCommandInput;
    constructor(input: ListShareInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListShareInvitationsCommandInput, ListShareInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
