import { __extends } from "tslib";
import { CreateAccessPointInput, CreateAccessPointOutput } from "../models/models_0";
import { deserializeAws_queryCreateLoadBalancerCommand, serializeAws_queryCreateLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Classic Load Balancer.</p>
 *
 *         <p>You can add listeners, security groups, subnets, and tags when you create your load balancer,
 *             or you can add them later using <a>CreateLoadBalancerListeners</a>,
 *             <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>,
 *             and <a>AddTags</a>.</p>
 *         <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>.
 *             When you are finished with a load balancer, you can delete it using
 *             <a>DeleteLoadBalancer</a>.</p>
 *
 *         <p>You can create up to 20 load balancers per region per account.
 *             You can request an increase for the number of load balancers for your account.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoadBalancerCommand(input) {
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
    CreateLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "CreateLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccessPointInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccessPointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateLoadBalancerCommand(input, context);
    };
    CreateLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateLoadBalancerCommand(output, context);
    };
    return CreateLoadBalancerCommand;
}($Command));
export { CreateLoadBalancerCommand };
//# sourceMappingURL=CreateLoadBalancerCommand.js.map