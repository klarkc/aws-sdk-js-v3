import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateUserGroupMessage, UserGroup } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserGroupCommandInput extends CreateUserGroupMessage {
}
export interface CreateUserGroupCommandOutput extends UserGroup, __MetadataBearer {
}
/**
 * <p>For Redis engine version 6.x onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateUserGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserGroupCommand extends $Command<CreateUserGroupCommandInput, CreateUserGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateUserGroupCommandInput;
    constructor(input: CreateUserGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserGroupCommandInput, CreateUserGroupCommandOutput>;
    private serialize;
    private deserialize;
}
