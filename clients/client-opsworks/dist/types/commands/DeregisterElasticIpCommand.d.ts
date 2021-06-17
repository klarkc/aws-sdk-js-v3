import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterElasticIpRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterElasticIpCommandInput extends DeregisterElasticIpRequest {
}
export interface DeregisterElasticIpCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deregisters a specified Elastic IP address. The address can then be registered by another
 *       stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeregisterElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeregisterElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DeregisterElasticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterElasticIpCommandInput} for command's `input` shape.
 * @see {@link DeregisterElasticIpCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterElasticIpCommand extends $Command<DeregisterElasticIpCommandInput, DeregisterElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeregisterElasticIpCommandInput;
    constructor(input: DeregisterElasticIpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterElasticIpCommandInput, DeregisterElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
