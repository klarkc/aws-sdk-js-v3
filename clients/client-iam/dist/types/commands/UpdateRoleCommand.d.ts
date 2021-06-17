import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateRoleRequest, UpdateRoleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRoleCommandInput extends UpdateRoleRequest {
}
export interface UpdateRoleCommandOutput extends UpdateRoleResponse, __MetadataBearer {
}
/**
 * <p>Updates the description or maximum session duration setting of a role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoleCommand extends $Command<UpdateRoleCommandInput, UpdateRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateRoleCommandInput;
    constructor(input: UpdateRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoleCommandInput, UpdateRoleCommandOutput>;
    private serialize;
    private deserialize;
}
