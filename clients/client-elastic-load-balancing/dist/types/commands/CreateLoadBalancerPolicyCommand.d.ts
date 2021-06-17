import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateLoadBalancerPolicyInput, CreateLoadBalancerPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLoadBalancerPolicyCommandInput extends CreateLoadBalancerPolicyInput {
}
export interface CreateLoadBalancerPolicyCommandOutput extends CreateLoadBalancerPolicyOutput, __MetadataBearer {
}
/**
 * <p>Creates a policy with the specified attributes for the specified load balancer.</p>
 *          <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLoadBalancerPolicyCommand extends $Command<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateLoadBalancerPolicyCommandInput;
    constructor(input: CreateLoadBalancerPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
