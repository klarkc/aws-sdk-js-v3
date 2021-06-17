import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterInstanceRequest, RegisterInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterInstanceCommandInput extends RegisterInstanceRequest {
}
export interface RegisterInstanceCommandOutput extends RegisterInstanceResult, __MetadataBearer {
}
/**
 * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p>
 *          <note>
 *             <p>We do not recommend using this action to register instances. The complete registration
 *       operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering
 *       the instance with the stack. <code>RegisterInstance</code> handles only the second step. You
 *       should instead use the AWS CLI <code>register</code> command, which performs the entire
 *       registration operation. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html">
 *       Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p>
 *          </note>
 *          <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API.
 *       For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance
 *       type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html">
 *           Preparing the Instance</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterInstanceCommand extends $Command<RegisterInstanceCommandInput, RegisterInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterInstanceCommandInput;
    constructor(input: RegisterInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterInstanceCommandInput, RegisterInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
