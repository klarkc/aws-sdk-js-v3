import { __extends } from "tslib";
import { DetachLoadBalancerFromSubnetsInput, DetachLoadBalancerFromSubnetsOutput } from "../models/models_0";
import { deserializeAws_queryDetachLoadBalancerFromSubnetsCommand, serializeAws_queryDetachLoadBalancerFromSubnetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p>
 *         <p>After a subnet is removed, all EC2 instances registered with the load balancer
 *             in the removed subnet go into the <code>OutOfService</code> state. Then,
 *             the load balancer balances the traffic among the remaining routable subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DetachLoadBalancerFromSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DetachLoadBalancerFromSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DetachLoadBalancerFromSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachLoadBalancerFromSubnetsCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancerFromSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachLoadBalancerFromSubnetsCommand = /** @class */ (function (_super) {
    __extends(DetachLoadBalancerFromSubnetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachLoadBalancerFromSubnetsCommand(input) {
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
    DetachLoadBalancerFromSubnetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DetachLoadBalancerFromSubnetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachLoadBalancerFromSubnetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DetachLoadBalancerFromSubnetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachLoadBalancerFromSubnetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDetachLoadBalancerFromSubnetsCommand(input, context);
    };
    DetachLoadBalancerFromSubnetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDetachLoadBalancerFromSubnetsCommand(output, context);
    };
    return DetachLoadBalancerFromSubnetsCommand;
}($Command));
export { DetachLoadBalancerFromSubnetsCommand };
//# sourceMappingURL=DetachLoadBalancerFromSubnetsCommand.js.map