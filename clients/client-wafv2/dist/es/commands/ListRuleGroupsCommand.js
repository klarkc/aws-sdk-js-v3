import { __extends } from "tslib";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRuleGroupsCommand, serializeAws_json1_1ListRuleGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRuleGroupsCommand = /** @class */ (function (_super) {
    __extends(ListRuleGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRuleGroupsCommand(input) {
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
    ListRuleGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "ListRuleGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRuleGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRuleGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRuleGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRuleGroupsCommand(input, context);
    };
    ListRuleGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRuleGroupsCommand(output, context);
    };
    return ListRuleGroupsCommand;
}($Command));
export { ListRuleGroupsCommand };
//# sourceMappingURL=ListRuleGroupsCommand.js.map