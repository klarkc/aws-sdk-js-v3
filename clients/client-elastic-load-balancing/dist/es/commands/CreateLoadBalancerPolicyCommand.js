import { __extends } from "tslib";
import { CreateLoadBalancerPolicyInput, CreateLoadBalancerPolicyOutput } from "../models/models_0";
import { deserializeAws_queryCreateLoadBalancerPolicyCommand, serializeAws_queryCreateLoadBalancerPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a policy with the specified attributes for the specified load balancer.</p>
 *          <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerPolicyCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoadBalancerPolicyCommand = /** @class */ (function (_super) {
    __extends(CreateLoadBalancerPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoadBalancerPolicyCommand(input) {
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
    CreateLoadBalancerPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "CreateLoadBalancerPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLoadBalancerPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLoadBalancerPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoadBalancerPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateLoadBalancerPolicyCommand(input, context);
    };
    CreateLoadBalancerPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateLoadBalancerPolicyCommand(output, context);
    };
    return CreateLoadBalancerPolicyCommand;
}($Command));
export { CreateLoadBalancerPolicyCommand };
//# sourceMappingURL=CreateLoadBalancerPolicyCommand.js.map