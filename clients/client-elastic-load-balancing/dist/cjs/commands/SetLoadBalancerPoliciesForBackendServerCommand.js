"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLoadBalancerPoliciesForBackendServerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies.
 *             At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p>
 *         <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies,
 *             use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p>
 *         <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy
 *             is associated with the EC2 instance.</p>
 *
 *         <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a>
 *             in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SetLoadBalancerPoliciesForBackendServerCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ElasticLoadBalancingClient";
        const commandName = "SetLoadBalancerPoliciesForBackendServerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SetLoadBalancerPoliciesForBackendServerInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SetLoadBalancerPoliciesForBackendServerOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand(output, context);
    }
}
exports.SetLoadBalancerPoliciesForBackendServerCommand = SetLoadBalancerPoliciesForBackendServerCommand;
//# sourceMappingURL=SetLoadBalancerPoliciesForBackendServerCommand.js.map