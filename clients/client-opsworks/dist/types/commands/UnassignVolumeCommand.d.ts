import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UnassignVolumeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnassignVolumeCommandInput extends UnassignVolumeRequest {
}
export interface UnassignVolumeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
 *         Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UnassignVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UnassignVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UnassignVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignVolumeCommandInput} for command's `input` shape.
 * @see {@link UnassignVolumeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnassignVolumeCommand extends $Command<UnassignVolumeCommandInput, UnassignVolumeCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UnassignVolumeCommandInput;
    constructor(input: UnassignVolumeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignVolumeCommandInput, UnassignVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
