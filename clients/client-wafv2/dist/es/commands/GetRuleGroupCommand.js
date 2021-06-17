import { __extends } from "tslib";
import { GetRuleGroupRequest, GetRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRuleGroupCommand, serializeAws_json1_1GetRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified <a>RuleGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRuleGroupCommand = /** @class */ (function (_super) {
    __extends(GetRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRuleGroupCommand(input) {
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
    GetRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRuleGroupCommand(input, context);
    };
    GetRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRuleGroupCommand(output, context);
    };
    return GetRuleGroupCommand;
}($Command));
export { GetRuleGroupCommand };
//# sourceMappingURL=GetRuleGroupCommand.js.map