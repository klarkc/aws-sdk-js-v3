import { __extends } from "tslib";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { deserializeAws_queryModifyLoadBalancerAttributesCommand, serializeAws_queryModifyLoadBalancerAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load
 *       Balancer, or Gateway Load Balancer.</p>
 *          <p>If any of the specified attributes can't be modified as requested, the call fails. Any
 *       existing attributes that you do not modify retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyLoadBalancerAttributesCommand = /** @class */ (function (_super) {
    __extends(ModifyLoadBalancerAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyLoadBalancerAttributesCommand(input) {
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
    ModifyLoadBalancerAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "ModifyLoadBalancerAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyLoadBalancerAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyLoadBalancerAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyLoadBalancerAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyLoadBalancerAttributesCommand(input, context);
    };
    ModifyLoadBalancerAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyLoadBalancerAttributesCommand(output, context);
    };
    return ModifyLoadBalancerAttributesCommand;
}($Command));
export { ModifyLoadBalancerAttributesCommand };
//# sourceMappingURL=ModifyLoadBalancerAttributesCommand.js.map