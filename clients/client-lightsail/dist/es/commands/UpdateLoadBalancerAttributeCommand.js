import { __extends } from "tslib";
import { UpdateLoadBalancerAttributeRequest, UpdateLoadBalancerAttributeResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateLoadBalancerAttributeCommand, serializeAws_json1_1UpdateLoadBalancerAttributeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at
 *       a time.</p>
 *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateLoadBalancerAttributeCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateLoadBalancerAttributeCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateLoadBalancerAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoadBalancerAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateLoadBalancerAttributeCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLoadBalancerAttributeCommand = /** @class */ (function (_super) {
    __extends(UpdateLoadBalancerAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLoadBalancerAttributeCommand(input) {
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
    UpdateLoadBalancerAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateLoadBalancerAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLoadBalancerAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLoadBalancerAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLoadBalancerAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLoadBalancerAttributeCommand(input, context);
    };
    UpdateLoadBalancerAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLoadBalancerAttributeCommand(output, context);
    };
    return UpdateLoadBalancerAttributeCommand;
}($Command));
export { UpdateLoadBalancerAttributeCommand };
//# sourceMappingURL=UpdateLoadBalancerAttributeCommand.js.map