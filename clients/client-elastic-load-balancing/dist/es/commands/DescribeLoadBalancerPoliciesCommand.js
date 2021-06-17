import { __extends } from "tslib";
import { DescribeLoadBalancerPoliciesInput, DescribeLoadBalancerPoliciesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeLoadBalancerPoliciesCommand, serializeAws_queryDescribeLoadBalancerPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified policies.</p>
 *          <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer.
 *     If you specify a policy name associated with your load balancer, the action returns the description of that policy.
 *     If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies.
 *     The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeLoadBalancerPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancerPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoadBalancerPoliciesCommand = /** @class */ (function (_super) {
    __extends(DescribeLoadBalancerPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoadBalancerPoliciesCommand(input) {
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
    DescribeLoadBalancerPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DescribeLoadBalancerPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoadBalancerPoliciesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLoadBalancerPoliciesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoadBalancerPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeLoadBalancerPoliciesCommand(input, context);
    };
    DescribeLoadBalancerPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeLoadBalancerPoliciesCommand(output, context);
    };
    return DescribeLoadBalancerPoliciesCommand;
}($Command));
export { DescribeLoadBalancerPoliciesCommand };
//# sourceMappingURL=DescribeLoadBalancerPoliciesCommand.js.map