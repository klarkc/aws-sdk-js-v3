import { __extends } from "tslib";
import { DeregisterTargetsInput, DeregisterTargetsOutput } from "../models/models_0";
import { deserializeAws_queryDeregisterTargetsCommand, serializeAws_queryDeregisterTargetsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified targets from the specified target group. After the targets are
 *       deregistered, they no longer receive traffic from the load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeregisterTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterTargetsCommand = /** @class */ (function (_super) {
    __extends(DeregisterTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterTargetsCommand(input) {
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
    DeregisterTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DeregisterTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTargetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTargetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeregisterTargetsCommand(input, context);
    };
    DeregisterTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeregisterTargetsCommand(output, context);
    };
    return DeregisterTargetsCommand;
}($Command));
export { DeregisterTargetsCommand };
//# sourceMappingURL=DeregisterTargetsCommand.js.map