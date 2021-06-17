import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { UpdateGroupQueryInput, UpdateGroupQueryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateGroupQueryCommandInput extends UpdateGroupQueryInput {
}
export interface UpdateGroupQueryCommandOutput extends UpdateGroupQueryOutput, __MetadataBearer {
}
/**
 * <p>Updates the resource query of a group. For more information about resource queries,
 *             see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:UpdateGroupQuery</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new UpdateGroupQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupQueryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGroupQueryCommand extends $Command<UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput, ResourceGroupsClientResolvedConfig> {
    readonly input: UpdateGroupQueryCommandInput;
    constructor(input: UpdateGroupQueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput>;
    private serialize;
    private deserialize;
}
