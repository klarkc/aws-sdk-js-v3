import { __extends } from "tslib";
import { SetRulePrioritiesInput, SetRulePrioritiesOutput } from "../models/models_0";
import { deserializeAws_querySetRulePrioritiesCommand, serializeAws_querySetRulePrioritiesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the priorities of the specified rules.</p>
 *          <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any
 *       existing rules that you do not specify retain their current priority.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetRulePrioritiesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetRulePrioritiesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetRulePrioritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRulePrioritiesCommandInput} for command's `input` shape.
 * @see {@link SetRulePrioritiesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetRulePrioritiesCommand = /** @class */ (function (_super) {
    __extends(SetRulePrioritiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetRulePrioritiesCommand(input) {
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
    SetRulePrioritiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "SetRulePrioritiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetRulePrioritiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetRulePrioritiesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetRulePrioritiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetRulePrioritiesCommand(input, context);
    };
    SetRulePrioritiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetRulePrioritiesCommand(output, context);
    };
    return SetRulePrioritiesCommand;
}($Command));
export { SetRulePrioritiesCommand };
//# sourceMappingURL=SetRulePrioritiesCommand.js.map