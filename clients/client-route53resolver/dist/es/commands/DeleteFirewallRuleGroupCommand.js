import { __extends } from "tslib";
import { DeleteFirewallRuleGroupRequest, DeleteFirewallRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteFirewallRuleGroupCommand, serializeAws_json1_1DeleteFirewallRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified firewall rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFirewallRuleGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteFirewallRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFirewallRuleGroupCommand(input) {
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
    DeleteFirewallRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DeleteFirewallRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFirewallRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFirewallRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFirewallRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFirewallRuleGroupCommand(input, context);
    };
    DeleteFirewallRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFirewallRuleGroupCommand(output, context);
    };
    return DeleteFirewallRuleGroupCommand;
}($Command));
export { DeleteFirewallRuleGroupCommand };
//# sourceMappingURL=DeleteFirewallRuleGroupCommand.js.map