import { __extends } from "tslib";
import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateRuleGroupCommand, serializeAws_json1_1UpdateRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified <a>RuleGroup</a>.</p>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRuleGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRuleGroupCommand(input) {
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
    UpdateRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "UpdateRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRuleGroupCommand(input, context);
    };
    UpdateRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRuleGroupCommand(output, context);
    };
    return UpdateRuleGroupCommand;
}($Command));
export { UpdateRuleGroupCommand };
//# sourceMappingURL=UpdateRuleGroupCommand.js.map