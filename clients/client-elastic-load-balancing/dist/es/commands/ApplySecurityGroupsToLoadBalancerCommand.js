import { __extends } from "tslib";
import { ApplySecurityGroupsToLoadBalancerInput, ApplySecurityGroupsToLoadBalancerOutput } from "../models/models_0";
import { deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand, serializeAws_queryApplySecurityGroupsToLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ApplySecurityGroupsToLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new ApplySecurityGroupsToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplySecurityGroupsToLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(ApplySecurityGroupsToLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ApplySecurityGroupsToLoadBalancerCommand(input) {
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
    ApplySecurityGroupsToLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "ApplySecurityGroupsToLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ApplySecurityGroupsToLoadBalancerInput.filterSensitiveLog,
            outputFilterSensitiveLog: ApplySecurityGroupsToLoadBalancerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ApplySecurityGroupsToLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryApplySecurityGroupsToLoadBalancerCommand(input, context);
    };
    ApplySecurityGroupsToLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand(output, context);
    };
    return ApplySecurityGroupsToLoadBalancerCommand;
}($Command));
export { ApplySecurityGroupsToLoadBalancerCommand };
//# sourceMappingURL=ApplySecurityGroupsToLoadBalancerCommand.js.map