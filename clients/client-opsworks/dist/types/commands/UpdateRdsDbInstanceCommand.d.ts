import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateRdsDbInstanceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRdsDbInstanceCommandInput extends UpdateRdsDbInstanceRequest {
}
export interface UpdateRdsDbInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates an Amazon RDS instance.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateRdsDbInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateRdsDbInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateRdsDbInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRdsDbInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateRdsDbInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRdsDbInstanceCommand extends $Command<UpdateRdsDbInstanceCommandInput, UpdateRdsDbInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateRdsDbInstanceCommandInput;
    constructor(input: UpdateRdsDbInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRdsDbInstanceCommandInput, UpdateRdsDbInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
