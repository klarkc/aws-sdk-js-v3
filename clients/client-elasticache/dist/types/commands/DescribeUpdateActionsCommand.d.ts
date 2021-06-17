import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeUpdateActionsMessage, UpdateActionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUpdateActionsCommandInput extends DescribeUpdateActionsMessage {
}
export interface DescribeUpdateActionsCommandOutput extends UpdateActionsMessage, __MetadataBearer {
}
/**
 * <p>Returns details of the update actions </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUpdateActionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUpdateActionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeUpdateActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUpdateActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateActionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUpdateActionsCommand extends $Command<DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeUpdateActionsCommandInput;
    constructor(input: DescribeUpdateActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput>;
    private serialize;
    private deserialize;
}
