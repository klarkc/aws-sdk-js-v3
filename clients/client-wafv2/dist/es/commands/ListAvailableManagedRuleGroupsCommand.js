import { __extends } from "tslib";
import { ListAvailableManagedRuleGroupsRequest, ListAvailableManagedRuleGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand, serializeAws_json1_1ListAvailableManagedRuleGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of managed rule groups that are available for you to use. This list includes all AWS Managed Rules rule groups and the AWS Marketplace managed rule groups that you're subscribed to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListAvailableManagedRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListAvailableManagedRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListAvailableManagedRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagedRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagedRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAvailableManagedRuleGroupsCommand = /** @class */ (function (_super) {
    __extends(ListAvailableManagedRuleGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAvailableManagedRuleGroupsCommand(input) {
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
    ListAvailableManagedRuleGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "ListAvailableManagedRuleGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAvailableManagedRuleGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAvailableManagedRuleGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAvailableManagedRuleGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAvailableManagedRuleGroupsCommand(input, context);
    };
    ListAvailableManagedRuleGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand(output, context);
    };
    return ListAvailableManagedRuleGroupsCommand;
}($Command));
export { ListAvailableManagedRuleGroupsCommand };
//# sourceMappingURL=ListAvailableManagedRuleGroupsCommand.js.map