import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheClusterMessage, DescribeCacheClustersMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCacheClustersCommandInput extends DescribeCacheClustersMessage {
}
export interface DescribeCacheClustersCommandOutput extends CacheClusterMessage, __MetadataBearer {
}
/**
 * <p>Returns information about all provisioned
 *             clusters if no cluster identifier is specified, or about a specific cache
 *             cluster if a cluster identifier is supplied.</p>
 *         <p>By default, abbreviated information about the clusters is returned. You can
 *             use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the
 *             cache nodes associated with the clusters. These details include the DNS address
 *             and port for the cache node endpoint.</p>
 *         <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed
 *             until all of the nodes are successfully provisioned.</p>
 *         <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p>
 *         <p>If cache nodes are currently being added to the cluster, node endpoint information
 *             and creation time for the additional nodes are not displayed until they are
 *             completely provisioned. When the cluster state is <i>available</i>, the cluster is
 *             ready for use.</p>
 *         <p>If cache nodes are currently being removed from the cluster, no endpoint information
 *             for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheClustersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheClustersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheClustersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCacheClustersCommand extends $Command<DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheClustersCommandInput;
    constructor(input: DescribeCacheClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput>;
    private serialize;
    private deserialize;
}
