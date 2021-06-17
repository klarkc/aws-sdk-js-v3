import { __extends } from "tslib";
import { GetFirewallRuleGroupAssociationRequest, GetFirewallRuleGroupAssociationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand, serializeAws_json1_1GetFirewallRuleGroupAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFirewallRuleGroupAssociationCommand = /** @class */ (function (_super) {
    __extends(GetFirewallRuleGroupAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFirewallRuleGroupAssociationCommand(input) {
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
    GetFirewallRuleGroupAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetFirewallRuleGroupAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFirewallRuleGroupAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFirewallRuleGroupAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFirewallRuleGroupAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFirewallRuleGroupAssociationCommand(input, context);
    };
    GetFirewallRuleGroupAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand(output, context);
    };
    return GetFirewallRuleGroupAssociationCommand;
}($Command));
export { GetFirewallRuleGroupAssociationCommand };
//# sourceMappingURL=GetFirewallRuleGroupAssociationCommand.js.map