import { __extends } from "tslib";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_0ListRuleGroupsCommand, serializeAws_json1_0ListRuleGroupsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the metadata for the rule groups that you have defined. Depending on your
 *          setting for max results and the number of rule groups, a single call might not return the
 *          full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListRuleGroupsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListRuleGroupsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "NetworkFirewallClient";
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
        return serializeAws_json1_0ListRuleGroupsCommand(input, context);
    };
    ListRuleGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListRuleGroupsCommand(output, context);
    };
    return ListRuleGroupsCommand;
}($Command));
export { ListRuleGroupsCommand };
//# sourceMappingURL=ListRuleGroupsCommand.js.map