import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupsForUserRequest, ListGroupsForUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroupsForUserCommandInput extends ListGroupsForUserRequest {
}
export interface ListGroupsForUserCommandOutput extends ListGroupsForUserResponse, __MetadataBearer {
}
/**
 * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsForUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsForUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link ListGroupsForUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroupsForUserCommand extends $Command<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListGroupsForUserCommandInput;
    constructor(input: ListGroupsForUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput>;
    private serialize;
    private deserialize;
}
