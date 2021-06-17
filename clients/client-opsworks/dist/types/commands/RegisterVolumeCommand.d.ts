import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterVolumeRequest, RegisterVolumeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterVolumeCommandInput extends RegisterVolumeRequest {
}
export interface RegisterVolumeCommandOutput extends RegisterVolumeResult, __MetadataBearer {
}
/**
 * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one
 *       stack at a time. If the volume is already registered, you must first deregister it by calling
 *         <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterVolumeCommandInput} for command's `input` shape.
 * @see {@link RegisterVolumeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterVolumeCommand extends $Command<RegisterVolumeCommandInput, RegisterVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterVolumeCommandInput;
    constructor(input: RegisterVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterVolumeCommandInput, RegisterVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
