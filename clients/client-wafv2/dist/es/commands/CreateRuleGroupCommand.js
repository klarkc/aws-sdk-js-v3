import { __extends } from "tslib";
import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateRuleGroupCommand, serializeAws_json1_1CreateRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <a>RuleGroup</a> per the specifications provided. </p>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CreateRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CreateRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CreateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRuleGroupCommand = /** @class */ (function (_super) {
    __extends(CreateRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRuleGroupCommand(input) {
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
    CreateRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "CreateRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRuleGroupCommand(input, context);
    };
    CreateRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRuleGroupCommand(output, context);
    };
    return CreateRuleGroupCommand;
}($Command));
export { CreateRuleGroupCommand };
//# sourceMappingURL=CreateRuleGroupCommand.js.map