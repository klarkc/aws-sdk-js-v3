import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheEngineVersionMessage, DescribeCacheEngineVersionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCacheEngineVersionsCommandInput extends DescribeCacheEngineVersionsMessage {
}
export interface DescribeCacheEngineVersionsCommandOutput extends CacheEngineVersionMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of the available cache
 *             engines and their versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheEngineVersionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheEngineVersionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCacheEngineVersionsCommand extends $Command<DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheEngineVersionsCommandInput;
    constructor(input: DescribeCacheEngineVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
