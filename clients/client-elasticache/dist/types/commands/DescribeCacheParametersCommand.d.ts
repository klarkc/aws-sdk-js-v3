import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupDetails, DescribeCacheParametersMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCacheParametersCommandInput extends DescribeCacheParametersMessage {
}
export interface DescribeCacheParametersCommandOutput extends CacheParameterGroupDetails, __MetadataBearer {
}
/**
 * <p>Returns the detailed parameter list for a
 *             particular cache parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCacheParametersCommand extends $Command<DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheParametersCommandInput;
    constructor(input: DescribeCacheParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput>;
    private serialize;
    private deserialize;
}
