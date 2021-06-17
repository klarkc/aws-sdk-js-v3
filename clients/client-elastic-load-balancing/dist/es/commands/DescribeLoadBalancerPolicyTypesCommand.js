import { __extends } from "tslib";
import { DescribeLoadBalancerPolicyTypesInput, DescribeLoadBalancerPolicyTypesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand, serializeAws_queryDescribeLoadBalancerPolicyTypesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeLoadBalancerPolicyTypesCommand = /** @class */ (function (_super) {
    __extends(DescribeLoadBalancerPolicyTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoadBalancerPolicyTypesCommand(input) {
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
    DescribeLoadBalancerPolicyTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DescribeLoadBalancerPolicyTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoadBalancerPolicyTypesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLoadBalancerPolicyTypesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoadBalancerPolicyTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeLoadBalancerPolicyTypesCommand(input, context);
    };
    DescribeLoadBalancerPolicyTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand(output, context);
    };
    return DescribeLoadBalancerPolicyTypesCommand;
}($Command));
export { DescribeLoadBalancerPolicyTypesCommand };
//# sourceMappingURL=DescribeLoadBalancerPolicyTypesCommand.js.map