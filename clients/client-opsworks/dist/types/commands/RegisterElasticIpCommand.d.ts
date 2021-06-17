import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { RegisterElasticIpRequest, RegisterElasticIpResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterElasticIpCommandInput extends RegisterElasticIpRequest {
}
export interface RegisterElasticIpCommandOutput extends RegisterElasticIpResult, __MetadataBearer {
}
/**
 * <p>Registers an Elastic IP address with a specified stack. An address can be registered with
 *       only one stack at a time. If the address is already registered, you must first deregister it
 *       by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterElasticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterElasticIpCommandInput} for command's `input` shape.
 * @see {@link RegisterElasticIpCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterElasticIpCommand extends $Command<RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: RegisterElasticIpCommandInput;
    constructor(input: RegisterElasticIpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
