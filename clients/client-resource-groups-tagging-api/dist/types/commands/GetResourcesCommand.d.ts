import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { GetResourcesInput, GetResourcesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcesCommandInput extends GetResourcesInput {
}
export interface GetResourcesCommandOutput extends GetResourcesOutput, __MetadataBearer {
}
/**
 * <p>Returns all the tagged or previously tagged resources that are located in the
 *             specified Region for the AWS account.</p>
 *         <p>Depending on what information you want returned, you can also specify the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <i>Filters</i> that specify what tags and resource types you
 *                     want returned. The response includes all tags that are associated with the
 *                     requested resources.</p>
 *             </li>
 *             <li>
 *                 <p>Information about compliance with the account's effective tag policy. For more
 *                     information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag
 *                         Policies</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new GetResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcesCommandInput} for command's `input` shape.
 * @see {@link GetResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcesCommand extends $Command<GetResourcesCommandInput, GetResourcesCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: GetResourcesCommandInput;
    constructor(input: GetResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcesCommandInput, GetResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
