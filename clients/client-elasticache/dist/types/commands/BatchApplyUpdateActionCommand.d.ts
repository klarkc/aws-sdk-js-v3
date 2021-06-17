import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { BatchApplyUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchApplyUpdateActionCommandInput extends BatchApplyUpdateActionMessage {
}
export interface BatchApplyUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {
}
/**
 * <p>Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchApplyUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchApplyUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new BatchApplyUpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchApplyUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchApplyUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchApplyUpdateActionCommand extends $Command<BatchApplyUpdateActionCommandInput, BatchApplyUpdateActionCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: BatchApplyUpdateActionCommandInput;
    constructor(input: BatchApplyUpdateActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchApplyUpdateActionCommandInput, BatchApplyUpdateActionCommandOutput>;
    private serialize;
    private deserialize;
}
