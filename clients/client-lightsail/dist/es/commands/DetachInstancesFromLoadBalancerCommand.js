import { __extends } from "tslib";
import { DetachInstancesFromLoadBalancerRequest, DetachInstancesFromLoadBalancerResult } from "../models/models_0";
import { deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand, serializeAws_json1_1DetachInstancesFromLoadBalancerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches the specified instances from a Lightsail load balancer.</p>
 *          <p>This operation waits until the instances are no longer needed before they are detached
 *       from the load balancer.</p>
 *          <p>The <code>detach instances from load balancer</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachInstancesFromLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachInstancesFromLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachInstancesFromLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DetachInstancesFromLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachInstancesFromLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(DetachInstancesFromLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachInstancesFromLoadBalancerCommand(input) {
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
    DetachInstancesFromLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DetachInstancesFromLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachInstancesFromLoadBalancerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachInstancesFromLoadBalancerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachInstancesFromLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachInstancesFromLoadBalancerCommand(input, context);
    };
    DetachInstancesFromLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand(output, context);
    };
    return DetachInstancesFromLoadBalancerCommand;
}($Command));
export { DetachInstancesFromLoadBalancerCommand };
//# sourceMappingURL=DetachInstancesFromLoadBalancerCommand.js.map