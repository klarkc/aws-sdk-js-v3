import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { ListGroupResourcesInput, ListGroupResourcesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroupResourcesCommandInput extends ListGroupResourcesInput {
}
export interface ListGroupResourcesCommandOutput extends ListGroupResourcesOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of ARNs of the resources that are members of a specified resource
 *             group.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:ListGroupResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>cloudformation:DescribeStacks</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>cloudformation:ListStackResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, ListGroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, ListGroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new ListGroupResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupResourcesCommandInput} for command's `input` shape.
 * @see {@link ListGroupResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroupResourcesCommand extends $Command<ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput, ResourceGroupsClientResolvedConfig> {
    readonly input: ListGroupResourcesCommandInput;
    constructor(input: ListGroupResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
