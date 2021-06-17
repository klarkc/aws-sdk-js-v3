import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssignInstanceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssignInstanceCommandInput extends AssignInstanceRequest {
}
export interface AssignInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Assign a registered instance to a layer.</p>
 *          <ul>
 *             <li>
 *                <p>You can assign registered on-premises instances to any layer type.</p>
 *             </li>
 *             <li>
 *                <p>You can assign registered Amazon EC2 instances only to custom layers.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management
 *       (IAM) user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AssignInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssignInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssignInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignInstanceCommandInput} for command's `input` shape.
 * @see {@link AssignInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssignInstanceCommand extends $Command<AssignInstanceCommandInput, AssignInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AssignInstanceCommandInput;
    constructor(input: AssignInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignInstanceCommandInput, AssignInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
