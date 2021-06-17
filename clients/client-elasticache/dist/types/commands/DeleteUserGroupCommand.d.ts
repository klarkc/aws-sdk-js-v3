import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteUserGroupMessage, UserGroup } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserGroupCommandInput extends DeleteUserGroupMessage {
}
export interface DeleteUserGroupCommandOutput extends UserGroup, __MetadataBearer {
}
/**
 * <p>For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteUserGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserGroupCommand extends $Command<DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteUserGroupCommandInput;
    constructor(input: DeleteUserGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput>;
    private serialize;
    private deserialize;
}
