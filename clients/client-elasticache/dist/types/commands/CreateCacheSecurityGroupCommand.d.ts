import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheSecurityGroupMessage, CreateCacheSecurityGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCacheSecurityGroupCommandInput extends CreateCacheSecurityGroupMessage {
}
export interface CreateCacheSecurityGroupCommandOutput extends CreateCacheSecurityGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a new cache security group. Use a
 *             cache security group to control access to one or more clusters.</p>
 *         <p>Cache security groups are only used when you are creating a cluster outside of an Amazon
 *             Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache
 *             subnet group instead. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCacheSecurityGroupCommand extends $Command<CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateCacheSecurityGroupCommandInput;
    constructor(input: CreateCacheSecurityGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
