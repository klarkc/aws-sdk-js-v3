import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssignVolumeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssignVolumeCommandInput extends AssignVolumeRequest {
}
export interface AssignVolumeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must
 *       first be registered with the stack by calling <a>RegisterVolume</a>. After you register the
 *       volume, you must call <a>UpdateVolume</a> to specify a mount point before calling
 *         <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AssignVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssignVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssignVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignVolumeCommandInput} for command's `input` shape.
 * @see {@link AssignVolumeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssignVolumeCommand extends $Command<AssignVolumeCommandInput, AssignVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AssignVolumeCommandInput;
    constructor(input: AssignVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssignVolumeCommandInput, AssignVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
