import { __extends } from "tslib";
import { DeleteRuleGroupRequest, DeleteRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_0DeleteRuleGroupCommand, serializeAws_json1_0DeleteRuleGroupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified <a>RuleGroup</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DeleteRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRuleGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRuleGroupCommand(input) {
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
    DeleteRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DeleteRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteRuleGroupCommand(input, context);
    };
    DeleteRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteRuleGroupCommand(output, context);
    };
    return DeleteRuleGroupCommand;
}($Command));
export { DeleteRuleGroupCommand };
//# sourceMappingURL=DeleteRuleGroupCommand.js.map