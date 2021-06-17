import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListUserHierarchyGroupsRequest, ListUserHierarchyGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserHierarchyGroupsCommandInput extends ListUserHierarchyGroupsRequest {
}
export interface ListUserHierarchyGroupsCommandOutput extends ListUserHierarchyGroupsResponse, __MetadataBearer {
}
/**
 * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
 *     <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUserHierarchyGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUserHierarchyGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListUserHierarchyGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserHierarchyGroupsCommandInput} for command's `input` shape.
 * @see {@link ListUserHierarchyGroupsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserHierarchyGroupsCommand extends $Command<ListUserHierarchyGroupsCommandInput, ListUserHierarchyGroupsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListUserHierarchyGroupsCommandInput;
    constructor(input: ListUserHierarchyGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserHierarchyGroupsCommandInput, ListUserHierarchyGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
