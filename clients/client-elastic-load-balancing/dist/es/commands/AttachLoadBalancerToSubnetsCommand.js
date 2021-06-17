import { __extends } from "tslib";
import { AttachLoadBalancerToSubnetsInput, AttachLoadBalancerToSubnetsOutput } from "../models/models_0";
import { deserializeAws_queryAttachLoadBalancerToSubnetsCommand, serializeAws_queryAttachLoadBalancerToSubnetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AttachLoadBalancerToSubnetsCommand = /** @class */ (function (_super) {
    __extends(AttachLoadBalancerToSubnetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachLoadBalancerToSubnetsCommand(input) {
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
    AttachLoadBalancerToSubnetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "AttachLoadBalancerToSubnetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachLoadBalancerToSubnetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: AttachLoadBalancerToSubnetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachLoadBalancerToSubnetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAttachLoadBalancerToSubnetsCommand(input, context);
    };
    AttachLoadBalancerToSubnetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAttachLoadBalancerToSubnetsCommand(output, context);
    };
    return AttachLoadBalancerToSubnetsCommand;
}($Command));
export { AttachLoadBalancerToSubnetsCommand };
//# sourceMappingURL=AttachLoadBalancerToSubnetsCommand.js.map