import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesMessage, ReservedCacheNodeMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedCacheNodesCommandInput extends DescribeReservedCacheNodesMessage {
}
export interface DescribeReservedCacheNodesCommandOutput extends ReservedCacheNodeMessage, __MetadataBearer {
}
/**
 * <p>Returns information about reserved cache
 *             nodes for this account, or about a specified reserved cache node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReservedCacheNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedCacheNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedCacheNodesCommand extends $Command<DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeReservedCacheNodesCommandInput;
    constructor(input: DescribeReservedCacheNodesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput>;
    private serialize;
    private deserialize;
}
