import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPendingInvitationResourcesCommandInput extends ListPendingInvitationResourcesRequest {
}
export interface ListPendingInvitationResourcesCommandOutput extends ListPendingInvitationResourcesResponse, __MetadataBearer {
}
/**
 * <p>Lists the resources in a resource share that is shared with you but that the invitation is still pending for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPendingInvitationResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPendingInvitationResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPendingInvitationResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPendingInvitationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListPendingInvitationResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPendingInvitationResourcesCommand extends $Command<ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput, RAMClientResolvedConfig> {
    readonly input: ListPendingInvitationResourcesCommandInput;
    constructor(input: ListPendingInvitationResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
