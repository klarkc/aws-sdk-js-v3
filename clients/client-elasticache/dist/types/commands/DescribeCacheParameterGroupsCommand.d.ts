import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupsMessage, DescribeCacheParameterGroupsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCacheParameterGroupsCommandInput extends DescribeCacheParameterGroupsMessage {
}
export interface DescribeCacheParameterGroupsCommandOutput extends CacheParameterGroupsMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of cache parameter group
 *             descriptions. If a cache parameter group name is specified, the list contains only
 *             the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParameterGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParameterGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCacheParameterGroupsCommand extends $Command<DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheParameterGroupsCommandInput;
    constructor(input: DescribeCacheParameterGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
