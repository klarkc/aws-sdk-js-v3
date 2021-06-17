import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeUserGroupsMessage, DescribeUserGroupsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserGroupsCommandInput extends DescribeUserGroupsMessage {
}
export interface DescribeUserGroupsCommandOutput extends DescribeUserGroupsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of user groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUserGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUserGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeUserGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeUserGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserGroupsCommand extends $Command<DescribeUserGroupsCommandInput, DescribeUserGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeUserGroupsCommandInput;
    constructor(input: DescribeUserGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserGroupsCommandInput, DescribeUserGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
