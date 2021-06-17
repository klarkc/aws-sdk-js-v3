import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPermissionsBoundaryRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserPermissionsBoundaryCommandInput extends DeleteUserPermissionsBoundaryRequest {
}
export interface DeleteUserPermissionsBoundaryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the permissions boundary for the specified IAM user.</p>
 *         <important>
 *             <p>Deleting the permissions boundary for a user might increase its permissions by
 *                 allowing the user to perform all the actions granted in its permissions policies.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserPermissionsBoundaryCommand extends $Command<DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteUserPermissionsBoundaryCommandInput;
    constructor(input: DeleteUserPermissionsBoundaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
