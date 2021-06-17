import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyUserGroupMessage, UserGroup } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyUserGroupCommandInput extends ModifyUserGroupMessage {
}
export interface ModifyUserGroupCommandOutput extends UserGroup, __MetadataBearer {
}
/**
 * <p>Changes the list of users that belong to the user group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyUserGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyUserGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyUserGroupCommand extends $Command<ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyUserGroupCommandInput;
    constructor(input: ModifyUserGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput>;
    private serialize;
    private deserialize;
}
