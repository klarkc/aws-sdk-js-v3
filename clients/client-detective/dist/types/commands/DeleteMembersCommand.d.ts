import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMembersCommandInput extends DeleteMembersRequest {
}
export interface DeleteMembersCommandOutput extends DeleteMembersResponse, __MetadataBearer {
}
/**
 * <p>Deletes one or more member accounts from the administrator account's behavior graph.
 *          This operation can only be called by a Detective administrator account. That account cannot use
 *             <code>DeleteMembers</code> to delete their own account from the behavior graph. To
 *          disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API
 *          method.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DeleteMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DeleteMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMembersCommandInput} for command's `input` shape.
 * @see {@link DeleteMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMembersCommand extends $Command<DeleteMembersCommandInput, DeleteMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: DeleteMembersCommandInput;
    constructor(input: DeleteMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMembersCommandInput, DeleteMembersCommandOutput>;
    private serialize;
    private deserialize;
}
