import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssociateElasticIpRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateElasticIpCommandInput extends AssociateElasticIpRequest {
}
export interface AssociateElasticIpCommandOutput extends __MetadataBearer {
}
/**
 * <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The
 *       address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more
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
 * import { OpsWorksClient, AssociateElasticIpCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssociateElasticIpCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssociateElasticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateElasticIpCommandInput} for command's `input` shape.
 * @see {@link AssociateElasticIpCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateElasticIpCommand extends $Command<AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: AssociateElasticIpCommandInput;
    constructor(input: AssociateElasticIpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput>;
    private serialize;
    private deserialize;
}
