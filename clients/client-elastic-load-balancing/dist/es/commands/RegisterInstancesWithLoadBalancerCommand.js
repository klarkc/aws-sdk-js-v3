import { __extends } from "tslib";
import { RegisterEndPointsInput, RegisterEndPointsOutput } from "../models/models_0";
import { deserializeAws_queryRegisterInstancesWithLoadBalancerCommand, serializeAws_queryRegisterInstancesWithLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified instances to the specified load balancer.</p>
 *
 *         <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p>
 *
 *         <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered.
 *          Instance registration takes a little time to complete. To check the state of the registered instances, use
 *          <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p>
 *
 *         <p>After the instance is registered, it starts receiving traffic
 *          and requests from the load balancer. Any instance that is not
 *          in one of the Availability Zones registered for the load balancer
 *          is moved to the <code>OutOfService</code> state. If an Availability Zone
 *          is added to the load balancer later, any instances registered with the
 *          load balancer move to the <code>InService</code> state.</p>
 *
 *         <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, RegisterInstancesWithLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, RegisterInstancesWithLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new RegisterInstancesWithLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstancesWithLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link RegisterInstancesWithLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterInstancesWithLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(RegisterInstancesWithLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterInstancesWithLoadBalancerCommand(input) {
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
    RegisterInstancesWithLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "RegisterInstancesWithLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterEndPointsInput.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterEndPointsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterInstancesWithLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRegisterInstancesWithLoadBalancerCommand(input, context);
    };
    RegisterInstancesWithLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRegisterInstancesWithLoadBalancerCommand(output, context);
    };
    return RegisterInstancesWithLoadBalancerCommand;
}($Command));
export { RegisterInstancesWithLoadBalancerCommand };
//# sourceMappingURL=RegisterInstancesWithLoadBalancerCommand.js.map