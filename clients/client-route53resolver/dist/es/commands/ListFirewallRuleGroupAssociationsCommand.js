import { __extends } from "tslib";
import { ListFirewallRuleGroupAssociationsRequest, ListFirewallRuleGroupAssociationsResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand, serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p>
 *          <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallRuleGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallRuleGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallRuleGroupAssociationsCommand = /** @class */ (function (_super) {
    __extends(ListFirewallRuleGroupAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallRuleGroupAssociationsCommand(input) {
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
    ListFirewallRuleGroupAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListFirewallRuleGroupAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallRuleGroupAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallRuleGroupAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallRuleGroupAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand(input, context);
    };
    ListFirewallRuleGroupAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand(output, context);
    };
    return ListFirewallRuleGroupAssociationsCommand;
}($Command));
export { ListFirewallRuleGroupAssociationsCommand };
//# sourceMappingURL=ListFirewallRuleGroupAssociationsCommand.js.map