import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListUserGroupsRequest, ListUserGroupsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserGroupsCommandInput extends ListUserGroupsRequest {
}
export interface ListUserGroupsCommandOutput extends ListUserGroupsResponse, __MetadataBearer {
}
/**
 * <p>Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListUserGroupsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListUserGroupsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListUserGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserGroupsCommandInput} for command's `input` shape.
 * @see {@link ListUserGroupsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserGroupsCommand extends $Command<ListUserGroupsCommandInput, ListUserGroupsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListUserGroupsCommandInput;
    constructor(input: ListUserGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserGroupsCommandInput, ListUserGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
