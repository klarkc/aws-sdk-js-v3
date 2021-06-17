import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListMembersRequest, ListMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMembersCommandInput extends ListMembersRequest {
}
export interface ListMembersCommandOutput extends ListMembersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the list of member accounts for a behavior graph. Does not return member
 *          accounts that were removed from the behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMembersCommand extends $Command<ListMembersCommandInput, ListMembersCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: ListMembersCommandInput;
    constructor(input: ListMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMembersCommandInput, ListMembersCommandOutput>;
    private serialize;
    private deserialize;
}
