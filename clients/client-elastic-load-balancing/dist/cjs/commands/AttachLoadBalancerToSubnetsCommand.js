"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachLoadBalancerToSubnetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p>
 *         <p>The load balancer evenly distributes requests across all registered subnets.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, AttachLoadBalancerToSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, AttachLoadBalancerToSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new AttachLoadBalancerToSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachLoadBalancerToSubnetsCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerToSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AttachLoadBalancerToSubnetsCommand extends smithy_client_1.Command {
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
        const commandName = "AttachLoadBalancerToSubnetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AttachLoadBalancerToSubnetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AttachLoadBalancerToSubnetsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAttachLoadBalancerToSubnetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAttachLoadBalancerToSubnetsCommand(output, context);
    }
}
exports.AttachLoadBalancerToSubnetsCommand = AttachLoadBalancerToSubnetsCommand;
//# sourceMappingURL=AttachLoadBalancerToSubnetsCommand.js.map