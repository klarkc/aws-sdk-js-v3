import { __extends } from "tslib";
import { ListFirewallRulesRequest, ListFirewallRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFirewallRulesCommand, serializeAws_json1_1ListFirewallRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p>
 *          <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallRulesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallRulesCommand = /** @class */ (function (_super) {
    __extends(ListFirewallRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallRulesCommand(input) {
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
    ListFirewallRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListFirewallRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFirewallRulesCommand(input, context);
    };
    ListFirewallRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFirewallRulesCommand(output, context);
    };
    return ListFirewallRulesCommand;
}($Command));
export { ListFirewallRulesCommand };
//# sourceMappingURL=ListFirewallRulesCommand.js.map