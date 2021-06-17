import { __extends } from "tslib";
import { DeleteFirewallManagerRuleGroupsRequest, DeleteFirewallManagerRuleGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand, serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all rule groups that are managed by AWS Firewall Manager for the specified web ACL. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteFirewallManagerRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallManagerRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallManagerRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFirewallManagerRuleGroupsCommand = /** @class */ (function (_super) {
    __extends(DeleteFirewallManagerRuleGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFirewallManagerRuleGroupsCommand(input) {
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
    DeleteFirewallManagerRuleGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "DeleteFirewallManagerRuleGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFirewallManagerRuleGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFirewallManagerRuleGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFirewallManagerRuleGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand(input, context);
    };
    DeleteFirewallManagerRuleGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand(output, context);
    };
    return DeleteFirewallManagerRuleGroupsCommand;
}($Command));
export { DeleteFirewallManagerRuleGroupsCommand };
//# sourceMappingURL=DeleteFirewallManagerRuleGroupsCommand.js.map