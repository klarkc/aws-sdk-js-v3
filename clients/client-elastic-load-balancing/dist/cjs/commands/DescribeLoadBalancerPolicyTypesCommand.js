"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeLoadBalancerPolicyTypesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified load balancer policy types or all load balancer policy types.</p>
 *          <p>The description of each type indicates how it can be used. For example,
 *            some policies can be used only with layer 7 listeners,
 *            some policies can be used only with layer 4 listeners,
 *            and some policies can be used only with your EC2 instances.</p>
 *          <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types.
 *            Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or
 *            <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerPolicyTypesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerPolicyTypesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeLoadBalancerPolicyTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancerPolicyTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerPolicyTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeLoadBalancerPolicyTypesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeLoadBalancerPolicyTypesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeLoadBalancerPolicyTypesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeLoadBalancerPolicyTypesOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeLoadBalancerPolicyTypesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand(output, context);
    }
}
exports.DescribeLoadBalancerPolicyTypesCommand = DescribeLoadBalancerPolicyTypesCommand;
//# sourceMappingURL=DescribeLoadBalancerPolicyTypesCommand.js.map