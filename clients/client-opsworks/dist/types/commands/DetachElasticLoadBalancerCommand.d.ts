import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DetachElasticLoadBalancerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachElasticLoadBalancerCommandInput extends DetachElasticLoadBalancerRequest {
}
export interface DetachElasticLoadBalancerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DetachElasticLoadBalancerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DetachElasticLoadBalancerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DetachElasticLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachElasticLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DetachElasticLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachElasticLoadBalancerCommand extends $Command<DetachElasticLoadBalancerCommandInput, DetachElasticLoadBalancerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DetachElasticLoadBalancerCommandInput;
    constructor(input: DetachElasticLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachElasticLoadBalancerCommandInput, DetachElasticLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
