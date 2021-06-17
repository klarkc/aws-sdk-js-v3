import { __extends } from "tslib";
import { UpdateFirewallRuleRequest, UpdateFirewallRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateFirewallRuleCommand, serializeAws_json1_1UpdateFirewallRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified firewall rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallRuleCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallRuleCommand(input) {
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
    UpdateFirewallRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "UpdateFirewallRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFirewallRuleCommand(input, context);
    };
    UpdateFirewallRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFirewallRuleCommand(output, context);
    };
    return UpdateFirewallRuleCommand;
}($Command));
export { UpdateFirewallRuleCommand };
//# sourceMappingURL=UpdateFirewallRuleCommand.js.map