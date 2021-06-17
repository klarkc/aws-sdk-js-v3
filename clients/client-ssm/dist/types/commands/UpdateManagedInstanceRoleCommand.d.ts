import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateManagedInstanceRoleCommandInput extends UpdateManagedInstanceRoleRequest {
}
export interface UpdateManagedInstanceRoleCommandOutput extends UpdateManagedInstanceRoleResult, __MetadataBearer {
}
/**
 * <p>Changes the Amazon Identity and Access Management (IAM) role that is assigned to the
 *    on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid
 *    instances during the activation process. For more information, see <a>CreateActivation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateManagedInstanceRoleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateManagedInstanceRoleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateManagedInstanceRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateManagedInstanceRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedInstanceRoleCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateManagedInstanceRoleCommand extends $Command<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateManagedInstanceRoleCommandInput;
    constructor(input: UpdateManagedInstanceRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput>;
    private serialize;
    private deserialize;
}
