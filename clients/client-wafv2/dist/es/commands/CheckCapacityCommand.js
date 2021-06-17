import { __extends } from "tslib";
import { CheckCapacityRequest, CheckCapacityResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckCapacityCommand, serializeAws_json1_1CheckCapacityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 *          You can use this to check the capacity requirements for the rules you want to use in a
 *          <a>RuleGroup</a> or <a>WebACL</a>.
 *          </p>
 *          <p>AWS WAF uses WCUs to calculate and control the operating
 *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
 *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 *          Simple rules that cost little to run use fewer WCUs than more complex rules
 * 				that use more processing power.
 * 				Rule group capacity is fixed at creation, which helps users plan their
 *          web ACL WCU usage when they use a rule group.
 *          The WCU limit for web ACLs is 1,500.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CheckCapacityCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CheckCapacityCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CheckCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckCapacityCommandInput} for command's `input` shape.
 * @see {@link CheckCapacityCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckCapacityCommand = /** @class */ (function (_super) {
    __extends(CheckCapacityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckCapacityCommand(input) {
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
    CheckCapacityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "CheckCapacityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckCapacityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CheckCapacityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckCapacityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckCapacityCommand(input, context);
    };
    CheckCapacityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckCapacityCommand(output, context);
    };
    return CheckCapacityCommand;
}($Command));
export { CheckCapacityCommand };
//# sourceMappingURL=CheckCapacityCommand.js.map