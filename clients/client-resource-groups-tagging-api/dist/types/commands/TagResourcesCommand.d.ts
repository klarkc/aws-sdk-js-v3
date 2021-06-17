import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { TagResourcesInput, TagResourcesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagResourcesCommandInput extends TagResourcesInput {
}
export interface TagResourcesCommandOutput extends TagResourcesOutput, __MetadataBearer {
}
/**
 * <p>Applies one or more tags to the specified resources. Note the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Not all resources can have tags. For a list of services with resources that
 *                     support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the
 *                         Resource Groups Tagging API</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>AWS General
 *                         Reference.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You can only tag resources that are located in the specified AWS Region for
 *                     the AWS account.</p>
 *             </li>
 *             <li>
 *                 <p>To add tags to a resource, you need the necessary permissions for the service
 *                     that the resource belongs to as well as permissions for adding tags. For more
 *                     information, see the documentation for each service.</p>
 *             </li>
 *          </ul>
 *         <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, TagResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, TagResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new TagResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourcesCommandInput} for command's `input` shape.
 * @see {@link TagResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourcesCommand extends $Command<TagResourcesCommandInput, TagResourcesCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: TagResourcesCommandInput;
    constructor(input: TagResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourcesCommandInput, TagResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
