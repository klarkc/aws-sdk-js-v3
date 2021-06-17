import { __extends } from "tslib";
import { SetLoadBalancerPoliciesOfListenerInput, SetLoadBalancerPoliciesOfListenerOutput } from "../models/models_0";
import { deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand, serializeAws_querySetLoadBalancerPoliciesOfListenerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p>
 *         <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p>
 *         <p>For more information about setting policies, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>,
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesOfListenerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesOfListenerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new SetLoadBalancerPoliciesOfListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoadBalancerPoliciesOfListenerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesOfListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetLoadBalancerPoliciesOfListenerCommand = /** @class */ (function (_super) {
    __extends(SetLoadBalancerPoliciesOfListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetLoadBalancerPoliciesOfListenerCommand(input) {
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
    SetLoadBalancerPoliciesOfListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "SetLoadBalancerPoliciesOfListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetLoadBalancerPoliciesOfListenerInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetLoadBalancerPoliciesOfListenerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetLoadBalancerPoliciesOfListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetLoadBalancerPoliciesOfListenerCommand(input, context);
    };
    SetLoadBalancerPoliciesOfListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand(output, context);
    };
    return SetLoadBalancerPoliciesOfListenerCommand;
}($Command));
export { SetLoadBalancerPoliciesOfListenerCommand };
//# sourceMappingURL=SetLoadBalancerPoliciesOfListenerCommand.js.map