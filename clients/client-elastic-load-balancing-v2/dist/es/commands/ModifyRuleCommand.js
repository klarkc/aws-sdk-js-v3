import { __extends } from "tslib";
import { ModifyRuleInput, ModifyRuleOutput } from "../models/models_0";
import { deserializeAws_queryModifyRuleCommand, serializeAws_queryModifyRuleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the specified properties of the specified rule. Any properties that you do not
 *       specify are unchanged.</p>
 *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
 *       must provide the entire list. For example, to add an action, specify a list with the current
 *       actions plus the new action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyRuleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyRuleCommand = /** @class */ (function (_super) {
    __extends(ModifyRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyRuleCommand(input) {
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
    ModifyRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "ModifyRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyRuleInput.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyRuleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyRuleCommand(input, context);
    };
    ModifyRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyRuleCommand(output, context);
    };
    return ModifyRuleCommand;
}($Command));
export { ModifyRuleCommand };
//# sourceMappingURL=ModifyRuleCommand.js.map