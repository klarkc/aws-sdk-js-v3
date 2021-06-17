import { __extends } from "tslib";
import { DeleteFirewallRuleRequest, DeleteFirewallRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteFirewallRuleCommand, serializeAws_json1_1DeleteFirewallRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified firewall rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteFirewallRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFirewallRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteFirewallRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFirewallRuleCommand(input) {
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
    DeleteFirewallRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DeleteFirewallRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFirewallRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFirewallRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFirewallRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFirewallRuleCommand(input, context);
    };
    DeleteFirewallRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFirewallRuleCommand(output, context);
    };
    return DeleteFirewallRuleCommand;
}($Command));
export { DeleteFirewallRuleCommand };
//# sourceMappingURL=DeleteFirewallRuleCommand.js.map