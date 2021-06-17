import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DeleteLoadBalancerPolicyInput, DeleteLoadBalancerPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLoadBalancerPolicyCommandInput extends DeleteLoadBalancerPolicyInput {
}
export interface DeleteLoadBalancerPolicyCommandOutput extends DeleteLoadBalancerPolicyOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLoadBalancerPolicyCommand extends $Command<DeleteLoadBalancerPolicyCommandInput, DeleteLoadBalancerPolicyCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DeleteLoadBalancerPolicyCommandInput;
    constructor(input: DeleteLoadBalancerPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerPolicyCommandInput, DeleteLoadBalancerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
