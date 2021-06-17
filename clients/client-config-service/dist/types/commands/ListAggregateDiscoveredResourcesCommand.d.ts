import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListAggregateDiscoveredResourcesRequest, ListAggregateDiscoveredResourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAggregateDiscoveredResourcesCommandInput extends ListAggregateDiscoveredResourcesRequest {
}
export interface ListAggregateDiscoveredResourcesCommandOutput extends ListAggregateDiscoveredResourcesResponse, __MetadataBearer {
}
/**
 * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions.
 * 			A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region.
 * 			You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p>
 * 			      <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListAggregateDiscoveredResourcesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListAggregateDiscoveredResourcesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListAggregateDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAggregateDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAggregateDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAggregateDiscoveredResourcesCommand extends $Command<ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: ListAggregateDiscoveredResourcesCommandInput;
    constructor(input: ListAggregateDiscoveredResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
