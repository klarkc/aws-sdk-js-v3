import { __extends } from "tslib";
import { AssociateFirewallRuleGroupRequest, AssociateFirewallRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateFirewallRuleGroupCommand, serializeAws_json1_1AssociateFirewallRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateFirewallRuleGroupCommand = /** @class */ (function (_super) {
    __extends(AssociateFirewallRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateFirewallRuleGroupCommand(input) {
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
    AssociateFirewallRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "AssociateFirewallRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateFirewallRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateFirewallRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateFirewallRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateFirewallRuleGroupCommand(input, context);
    };
    AssociateFirewallRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateFirewallRuleGroupCommand(output, context);
    };
    return AssociateFirewallRuleGroupCommand;
}($Command));
export { AssociateFirewallRuleGroupCommand };
//# sourceMappingURL=AssociateFirewallRuleGroupCommand.js.map