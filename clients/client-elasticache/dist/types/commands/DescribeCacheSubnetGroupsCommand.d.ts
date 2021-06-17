import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheSubnetGroupMessage, DescribeCacheSubnetGroupsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCacheSubnetGroupsCommandInput extends DescribeCacheSubnetGroupsMessage {
}
export interface DescribeCacheSubnetGroupsCommandOutput extends CacheSubnetGroupMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of cache subnet group
 *             descriptions. If a subnet group name is specified, the list  contains only the
 *             description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheSubnetGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheSubnetGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCacheSubnetGroupsCommand extends $Command<DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheSubnetGroupsCommandInput;
    constructor(input: DescribeCacheSubnetGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
