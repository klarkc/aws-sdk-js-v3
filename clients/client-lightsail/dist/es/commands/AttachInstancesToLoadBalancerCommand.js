import { __extends } from "tslib";
import { AttachInstancesToLoadBalancerRequest, AttachInstancesToLoadBalancerResult } from "../models/models_0";
import { deserializeAws_json1_1AttachInstancesToLoadBalancerCommand, serializeAws_json1_1AttachInstancesToLoadBalancerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches one or more Lightsail instances to a load balancer.</p>
 *          <p>After some time, the instances are attached to the load balancer and the health check
 *       status is available.</p>
 *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachInstancesToLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachInstancesToLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachInstancesToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachInstancesToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link AttachInstancesToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachInstancesToLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(AttachInstancesToLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachInstancesToLoadBalancerCommand(input) {
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
    AttachInstancesToLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "AttachInstancesToLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachInstancesToLoadBalancerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachInstancesToLoadBalancerResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachInstancesToLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachInstancesToLoadBalancerCommand(input, context);
    };
    AttachInstancesToLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachInstancesToLoadBalancerCommand(output, context);
    };
    return AttachInstancesToLoadBalancerCommand;
}($Command));
export { AttachInstancesToLoadBalancerCommand };
//# sourceMappingURL=AttachInstancesToLoadBalancerCommand.js.map