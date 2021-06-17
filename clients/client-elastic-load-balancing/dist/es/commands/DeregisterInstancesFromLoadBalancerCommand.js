import { __extends } from "tslib";
import { DeregisterEndPointsInput, DeregisterEndPointsOutput } from "../models/models_0";
import { deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand, serializeAws_queryDeregisterInstancesFromLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p>
 *
 *         <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeregisterInstancesFromLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeregisterInstancesFromLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DeregisterInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterInstancesFromLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstancesFromLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterInstancesFromLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(DeregisterInstancesFromLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterInstancesFromLoadBalancerCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeregisterInstancesFromLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DeregisterInstancesFromLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterEndPointsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterEndPointsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterInstancesFromLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeregisterInstancesFromLoadBalancerCommand(input, context);
    };
    DeregisterInstancesFromLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand(output, context);
    };
    return DeregisterInstancesFromLoadBalancerCommand;
}($Command));
export { DeregisterInstancesFromLoadBalancerCommand };
//# sourceMappingURL=DeregisterInstancesFromLoadBalancerCommand.js.map