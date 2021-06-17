import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListGroupMembershipsRequest, ListGroupMembershipsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroupMembershipsCommandInput extends ListGroupMembershipsRequest {
}
export interface ListGroupMembershipsCommandOutput extends ListGroupMembershipsResponse, __MetadataBearer {
}
/**
 * <p>Lists member users in a group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListGroupMembershipsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListGroupMembershipsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListGroupMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembershipsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroupMembershipsCommand extends $Command<ListGroupMembershipsCommandInput, ListGroupMembershipsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListGroupMembershipsCommandInput;
    constructor(input: ListGroupMembershipsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupMembershipsCommandInput, ListGroupMembershipsCommandOutput>;
    private serialize;
    private deserialize;
}
