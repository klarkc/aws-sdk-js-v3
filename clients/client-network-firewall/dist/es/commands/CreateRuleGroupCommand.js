import { __extends } from "tslib";
import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateRuleGroupCommand, serializeAws_json1_0CreateRuleGroupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the specified stateless or stateful rule group, which includes the rules for
 *          network traffic inspection, a capacity setting, and tags. </p>
 *          <p>You provide your rule group specification in your request using either
 *             <code>RuleGroup</code> or <code>Rules</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "NetworkFirewallClient";
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
        return serializeAws_json1_0CreateRuleGroupCommand(input, context);
    };
    CreateRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateRuleGroupCommand(output, context);
    };
    return CreateRuleGroupCommand;
}($Command));
export { CreateRuleGroupCommand };
//# sourceMappingURL=CreateRuleGroupCommand.js.map